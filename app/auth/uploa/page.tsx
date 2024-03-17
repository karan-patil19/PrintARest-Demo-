"use client"
import { useState, ChangeEvent } from "react";
import { ref as databaseRef, set as setDatabase, push as pushDatabase } from "firebase/database";
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage1, db } from "../../firebase";
import { Button } from "../../components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";

interface Recipe {
  id: string;
  title: string;
  image: string;
  time?: number;
  description?: string;
  vegan?: boolean;
}

const data: Recipe[] = [
  {
    id: "1",
    title: "PDF",
    image: "/images/download.png",
    time: 20,
    description:
      "A vegetarian twist on the classic Italian pasta dish with eggs, cheese, and vegetarian bacon.",
    vegan: false,
  },
  {
    id: "2",
    title: "EXCEL",
    image: "/images/excel.png",
    time: 25,
    description:
      "A quick and healthy vegetarian stir-fry with fresh vegetables and tofu.",
    vegan: false,
  },
  {
    id: "3",
    title: "WORD",
    image: "/images/word.png",
    time: 30,
    description:
      "Creamy pasta with grilled vegetarian chicken and a rich Alfredo sauce.",
    vegan: false,
  },
  {
    id: "4",
    title: "PHOTOS",
    image: "/images/photos.png",
    time: 40,
    description:
      "A comforting vegetarian Italian rice dish with sautéed mushrooms and parmesan cheese.",
    vegan: false,
  },
];

export default function UploadPage() {
  const [fileupload, setfileupload] = useState<FileList | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setfileupload(event.target.files);
    }
  };

  const upload = async () => {
    if (fileupload !== null) {
      const promises = Array.from(fileupload).map((file: File) => {
        const fileref = storageRef(storage1, `documents/${file.name}`);
        return uploadBytes(fileref, file)
          .then((snapshot) => {
            return getDownloadURL(snapshot.ref);
          })
          .then((url) => {
            const shopId = "SHOP_ID"; // Replace with actual shop ID
            const slotTime = "SLOT_TIME"; // Replace with actual slot time
            const userId = "USER_ID"; // Replace with actual user ID

            // Store document data in Realtime Database
            const documentRef = pushDatabase(databaseRef(db, "documents"));
            return setDatabase(documentRef, {
              documentId: documentRef.key,
              name: file.name,
              url: url,
              shopId: shopId,
              slotTime: slotTime,
              userId: userId,
            });
          })
          .catch((error) => {
            console.error("Error uploading document:", error);
            return null;
          });
      });

      Promise.all(promises)
        .then(() => {
          alert("Documents uploaded successfully");
        })
        .catch((error) => {
          console.error("Error uploading documents:", error);
        });
    } else {
      alert("Please select a file");
    }
  };

  return (
    <main style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
      {data.map((recipe) => (
        <Card
          key={recipe.id}
          style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}
        >
          <CardHeader
            style={{ display: "flex", flexDirection: "row", gap: "4px", alignItems: "center" }}
          >
            <Avatar>
              <AvatarFallback>{recipe.title.slice(0, 2)}</AvatarFallback>
              <AvatarImage src={recipe.image} alt={recipe.title} />
            </Avatar>
            <div>
              <CardTitle>{recipe.title}</CardTitle>
              {recipe.time && <CardDescription>{recipe.time} mins to cook.</CardDescription>}
            </div>
          </CardHeader>
          {recipe.description && <CardContent><p>{recipe.description}</p></CardContent>}
          <CardFooter style={{ display: "flex", justifyContent: "space-between" }}>
            <input type="file" onChange={handleFileChange} multiple /> {/* File input field */}
            <Button onClick={upload}>Upload document</Button> {/* Upload button */}
            {recipe.vegan && <p>Vegan!</p>}
          </CardFooter>
        </Card>
      )).slice(0, 4)}
    </main>
  );
}
