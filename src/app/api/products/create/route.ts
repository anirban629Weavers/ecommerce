import { NextRequest, NextResponse } from "next/server";
import { IProduct } from "@/interfaces/product.interface";
import Product from "@/models/product.model";
import connectDB from "@/db";

export const POST = async (req: NextRequest) => {
  const productData: IProduct = await req.json();
  try {
    await connectDB();
    const existingProduct = await Product.findOne({
      name: productData.name,
      description: productData.description,
      category: productData.category,
    });
    if (existingProduct) throw new Error("Product Already Exists");
    else {
      const newProduct = await Product.create(productData);
      if (newProduct) {
        return NextResponse.json(
          {
            success: true,
            message: "Product Added Successfully",
            product: newProduct,
          },
          {
            status: 200,
          }
        );
      } else {
        throw new Error("Failed to add the Product");
      }
    }
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 404 }
    );
  }
};
/**
 * 
 * 
  {
    "imageUrl": "https://source.unsplash.com/400x300/?interior",
    "name": "Elegant Dining Table",
"price": 299.99,
    "description": "A stylish dining table for your elegant dining space.",
    "inStock": 15,
    "category": "Dining Room",
    "reviews": [
      {
        "user": "user123",
        "comment": "Beautiful dining table design. Adds elegance to the room."
      },
      {
        "user": "user456",
        "comment": "Sturdy construction. Easy to assemble."
      },
      {
        "user": "user789",
        "comment":
          "Great value for the price. Highly satisfied with the purchase."      }
    ]
  },
  {
    "imageUrl": "https://source.unsplash.com/400x300/?interior",
    "name": "Cozy Bedroom Set",
"price": 799.99,
    "description": "Create a cozy atmosphere with this complete bedroom set.",
    "inStock": 8,
    "category": "Bedroom",
    "reviews": [
      {
        "user": "user123",
        "comment": "Beautiful dining table design. Adds elegance to the room."
      },
      {
        "user": "user456",
        "comment": "Sturdy construction. Easy to assemble."
      },
      {
        "user": "user789",
        "comment":
          "Great value for the price. Highly satisfied with the purchase."      }
    ]
  },
  {
    "imageUrl": "https://source.unsplash.com/400x300/?interior",
    "name": "Chic Home Office Desk",
"price": 199.99,
    "description": "Enhance your workspace with this chic home office desk.",
    "inStock": 12,
    "category": "Home Office",
    "reviews": [
      {
        "user": "user123",
        "comment": "Beautiful dining table design. Adds elegance to the room."
      },
      {
        "user": "user456",
        "comment": "Sturdy construction. Easy to assemble."
      },
      {
        "user": "user789",
        "comment":
          "Great value for the price. Highly satisfied with the purchase."      }
    ]
  },
  {
    "imageUrl": "https://source.unsplash.com/400x300/?interior",
    "name": "Vintage Coffee Table",
"price": 149.99,
    "description": "Add a touch of vintage charm with this coffee table.",
    "inStock": 20,
    "category": "Living Room",
    "reviews": [
      {
        "user": "user123",
        "comment": "Beautiful dining table design. Adds elegance to the room."
      },
      {
        "user": "user456",
        "comment": "Sturdy construction. Easy to assemble."
      },
      {
        "user": "user789",
        "comment":
          "Great value for the price. Highly satisfied with the purchase."      }
    ]
  },
  {
    "imageUrl": "https://source.unsplash.com/400x300/?interior",
    "name": "Contemporary Dining Chairs",
"price": 129.99,
    "description":
      "Upgrade your dining experience with these contemporary chairs.",
    "inStock": 18,
    "category": "Dining Room",
    "reviews": [
      {
        "user": "user123",
        "comment": "Beautiful dining table design. Adds elegance to the room."
      },
      {
        "user": "user456",
        "comment": "Sturdy construction. Easy to assemble."
      },
      {
        "user": "user789",
        "comment":
          "Great value for the price. Highly satisfied with the purchase."      }
    ]
  },
  {
    "imageUrl": "https://source.unsplash.com/400x300/?interior",
    "name": "Sleek Bedroom Dresser",
"price": 349.99,
    "description": "Organize your bedroom with this sleek dresser.",
    "inStock": 10,
    "category": "Bedroom",
    "reviews": [
      {
        "user": "user123",
        "comment": "Beautiful dining table design. Adds elegance to the room."
      },
      {
        "user": "user456",
        "comment": "Sturdy construction. Easy to assemble."
      },
      {
        "user": "user789",
        "comment":
          "Great value for the price. Highly satisfied with the purchase."      }
    ]
  },
  {
    "imageUrl": "https://source.unsplash.com/400x300/?interior",
    "name": "Modern Home Office Chair",
"price": 179.99,
    "description": "Stay comfortable during work with this modern office chair.",
    "inStock": 15,
    "category": "Home Office",
    "reviews": [
      {
        "user": "user123",
        "comment": "Beautiful dining table design. Adds elegance to the room."
      },
      {
        "user": "user456",
        "comment": "Sturdy construction. Easy to assemble."
      },
      {
        "user": "user789",
        "comment":
          "Great value for the price. Highly satisfied with the purchase."      }
    ]
  },
  {
    "imageUrl": "https://source.unsplash.com/400x300/?interior",
    "name": "Rustic Living Room Table",
"price": 229.99,
    "description": "Add a touch of rustic charm with this living room table.",
    "inStock": 8,
    "category": "Living Room",
    "reviews": [
      {
        "user": "user123",
        "comment": "Beautiful dining table design. Adds elegance to the room."
      },
      {
        "user": "user456",
        "comment": "Sturdy construction. Easy to assemble."
      },
      {
        "user": "user789",
        "comment":
          "Great value for the price. Highly satisfied with the purchase."      }
    ]
  },
  {
    "imageUrl": "https://source.unsplash.com/400x300/?interior",
    "name": "Classic Dining Set",
"price": 599.99,
    "description": "Enjoy meals in style with this classic dining set.",
    "inStock": 12,
    "category": "Dining Room",
    "reviews": [
      {
        "user": "user123",
        "comment": "Beautiful dining table design. Adds elegance to the room."
      },
      {
        "user": "user456",
        "comment": "Sturdy construction. Easy to assemble."
      },
      {
        "user": "user789",
        "comment":
          "Great value for the price. Highly satisfied with the purchase."      }
    ]
  },
  {
    "imageUrl": "https://source.unsplash.com/400x300/?interior",
    "name": "Luxurious Bedroom Bed",
"price": 899.99,
    "description": "Experience luxury with this elegant bedroom bed.",
    "inStock": 10,
    "category": "Bedroom",
    "reviews": [
      {
        "user": "user123",
        "comment": "Beautiful dining table design. Adds elegance to the room."
      },
      {
        "user": "user456",
        "comment": "Sturdy construction. Easy to assemble."
      },
      {
        "user": "user789",
        "comment":
          "Great value for the price. Highly satisfied with the purchase."      }
    ]
  },
  {
    "imageUrl": "https://source.unsplash.com/400x300/?interior",
    "name": "Executive Office Desk",
"price": 299.99,
    "description": "Work in style with this executive office desk.",
    "inStock": 18,
    "category": "Home Office",
    "reviews": [
      {
        "user": "user123",
        "comment": "Beautiful dining table design. Adds elegance to the room."
      },
      {
        "user": "user456",
        "comment": "Sturdy construction. Easy to assemble."
      },
      {
        "user": "user789",
        "comment":
          "Great value for the price. Highly satisfied with the purchase."      }
    ]
  },
  {
    "imageUrl": "https://source.unsplash.com/400x300/?interior",
    "name": "Minimalist Living Room Chair",
"price": 129.99,
    "description": "Achieve a minimalist look with this living room chair.",
    "inStock": 15,
    "category": "Living Room",
    "reviews": [
      {
        "user": "user123",
        "comment": "Beautiful dining table design. Adds elegance to the room."
      },
      {
        "user": "user456",
        "comment": "Sturdy construction. Easy to assemble."
      },
      {
        "user": "user789",
        "comment":
          "Great value for the price. Highly satisfied with the purchase."      }
    ]
  },
  {
    "imageUrl": "https://source.unsplash.com/400x300/?interior",
    "name": "Glass Dining Table",
"price": 449.99,
    "description": "Add sophistication with this glass dining table.",
    "inStock": 20,
    "category": "Dining Room",
    "reviews": [
      {
        "user": "user123",
        "comment": "Beautiful dining table design. Adds elegance to the room."
      },
      {
        "user": "user456",
        "comment": "Sturdy construction. Easy to assemble."
      },
      {
        "user": "user789",
        "comment":
          "Great value for the price. Highly satisfied with the purchase."      }
    ]
  },
  {
    "imageUrl": "https://source.unsplash.com/400x300/?interior",
    "name": "Stylish Bedroom Nightstand",
"price": 99.99,
    "description": "Complete your bedroom with this stylish nightstand.",
    "inStock": 12,
    "category": "Bedroom",
    "reviews": [
      {
        "user": "user123",
        "comment": "Beautiful dining table design. Adds elegance to the room."
      },
      {
        "user": "user456",
        "comment": "Sturdy construction. Easy to assemble."
      },
      {
        "user": "user789",
        "comment":
          "Great value for the price. Highly satisfied with the purchase."      }
    ]
  },
  {
    "imageUrl": "https://source.unsplash.com/400x300/?interior",
    "name": "Modern Home Office Lamp",
"price": 49.99,
    "description": "Illuminate your workspace with this modern office lamp.",
    "inStock": 15,
    "category": "Home Office",
    "reviews": [
      {
        "user": "user123",
        "comment": "Beautiful dining table design. Adds elegance to the room."
      },
      {
        "user": "user456",
        "comment": "Sturdy construction. Easy to assemble."
      },
      {
        "user": "user789",
        "comment":
          "Great value for the price. Highly satisfied with the purchase."      }
    ]
  },
  {
    "imageUrl": "https://source.unsplash.com/400x300/?interior",
    "name": "Comfortable Living Room Sofa",
"price": 599.99,
    "description": "Relax in comfort with this living room sofa.",
    "inStock": 8,
    "category": "Living Room",
    "reviews": [
      {
        "user": "user123",
        "comment": "Beautiful dining table design. Adds elegance to the room."
      },
      {
        "user": "user456",
        "comment": "Sturdy construction. Easy to assemble."
      },
      {
        "user": "user789",
        "comment":
          "Great value for the price. Highly satisfied with the purchase."      }
    ]
  },
  {
    "imageUrl": "https://source.unsplash.com/400x300/?interior",
    "name": "Elegant Dining Buffet",
"price": 349.99,
    "description": "Store and display with this elegant dining buffet.",
    "inStock": 10,
    "category": "Dining Room",
    "reviews": [
      {
        "user": "user123",
        "comment": "Beautiful dining table design. Adds elegance to the room."
      },
      {
        "user": "user456",
        "comment": "Sturdy construction. Easy to assemble."
      },
      {
        "user": "user789",
        "comment":
          "Great value for the price. Highly satisfied with the purchase."      }
    ]
  },
  {
    "imageUrl": "https://source.unsplash.com/400x300/?interior",
    "name": "Cozy Bedroom Lounge Chair",
"price": 179.99,
    "description": "Create a cozy corner with this bedroom lounge chair.",
    "inStock": 18,
    "category": "Bedroom",
    "reviews": [
      {
        "user": "user123",
        "comment": "Beautiful dining table design. Adds elegance to the room."
      },
      {
        "user": "user456",
        "comment": "Sturdy construction. Easy to assemble."
      },
      {
        "user": "user789",
        "comment":
          "Great value for the price. Highly satisfied with the purchase."      }
    ]
  },
  {
    "imageUrl": "https://source.unsplash.com/400x300/?interior",
    "name": "Modern Home Office Bookshelf",
"price": 129.99,
    "description": "Organize your office essentials with this modern bookshelf.",
    "inStock": 20,
    "category": "Home Office",
    "reviews": [
      {
        "user": "user123",
        "comment": "Beautiful dining table design. Adds elegance to the room."
      },
      {
        "user": "user456",
        "comment": "Sturdy construction. Easy to assemble."
      },
      {
        "user": "user789",
        "comment":
          "Great value for the price. Highly satisfied with the purchase."      }
    ]
  }
 */
