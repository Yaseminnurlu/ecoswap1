import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  Button,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Input,
} from "@mui/material";

const NewAdPage = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New ad submitted:", { title, category, description, phone, image });

    alert("Your item has been listed!");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Card sx={{ padding: 3, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h4" sx={{ textAlign: "center", mb: 2 }}>
            List Your Item
          </Typography>

          <form onSubmit={handleSubmit}>
            {/* Title */}
            <TextField
              label="Title"
              variant="outlined"
              fullWidth
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              sx={{ mb: 2 }}
            />

            {/* Category */}
            <TextField
              select
              label="Select Category"
              variant="outlined"
              fullWidth
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              sx={{ mb: 2 }}
            >
              <MenuItem value="Furniture">Furniture</MenuItem>
              <MenuItem value="Electronics">Electronics</MenuItem>
              <MenuItem value="Clothes">Clothes</MenuItem>
            </TextField>

            {/* Description */}
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              sx={{ mb: 2 }}
            />

            {/* Phone Number */}
            <TextField
              label="Phone Number"
              variant="outlined"
              fullWidth
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              sx={{ mb: 2 }}
            />

            {/* Image Upload with Label */}
            <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
              <Grid item xs={8}>
                <TextField
                  label="Upload Image"
                  variant="outlined"
                  fullWidth
                  disabled
                  value={image ? image.name : ""}
                />
              </Grid>
              <Grid item xs={4}>
                <Button variant="contained" component="label" fullWidth>
                  Choose File
                  <input type="file" hidden accept="image/*" onChange={handleImageChange} />
                </Button>
              </Grid>
            </Grid>

            {/* Image Preview */}
            {preview && (
              <div style={{ textAlign: "center", marginBottom: "16px" }}>
                <img
                  src={preview}
                  alt="Preview"
                  style={{ width: "100%", maxHeight: "200px", objectFit: "cover", borderRadius: "8px" }}
                />
              </div>
            )}

            {/* Submit Button */}
            <Grid container justifyContent="center">
              <Button type="submit" variant="contained" color="primary" size="large">
                Submit Listing
              </Button>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default NewAdPage;
