export default function ApiWrapper({ children }: { children: ReactNode }) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const requestInterceptor = AxiosInstance.interceptors.request.use(
      (config) => config,
      async (error) => Promise.reject(error)
    );

    const responseInterceptor = AxiosInstance.interceptors.response.use(
      (response) => {
        toast.success(response.data.message);
        return response;
      },
      async (error) => {
        dispatch(setLoading(false));
        if (error.response.status === 401) {
          await new makeApiCall("/admin/auth/refresh-tokens").post();
          return AxiosInstance(error.config);
        }
        if (error.response.status === 403) {
          await new makeApiCall("/admin/auth/logout").post();
          dispatch(logoutUser());
        }
        toast.error(error.response.data.message);
        return Promise.reject(error);
      }
    );
    return () => {
      AxiosInstance.interceptors.request.eject(requestInterceptor);
      AxiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, []);
  return children;
}
