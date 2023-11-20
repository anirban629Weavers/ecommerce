import connectDB from "@/db";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (req: NextRequest) => {
  const {
    id,
    firstname,
    lastname,
    phone,
    birthday,
  }: {
    id: string;
    firstname?: string;
    lastname?: string;
    phone?: string;
    birthday?: string;
  } = await req.json();

  try {
    await connectDB();
    const user = await User.findById(id);
    if (!user) throw new Error("User doesn't exists");
    else {
      user.firstname = firstname || user.firstname;
      user.lastname = lastname || user.lastname;
      user.phone = phone || user.phone;
      user.birthday = birthday || user.birthday;

      await user.save();
    }
    return NextResponse.json({
      success: true,
      user,
      message: "User Updated Successfully",
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
};
