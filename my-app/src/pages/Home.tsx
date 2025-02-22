import "./Account";
import React, { useState } from "react";
import NewAdPage from "./NewAdPage";
import { Card, CardContent, Typography, Grid, CardMedia, Container } from "@mui/material";

interface Ad {
  title: string;
  category: string;
  image: string | null;
}

const HomePage = () => {
  const AccountButton: React.FC = () => {
    const handleClick = () => {
      window.location.href = './Account'; // Redirect to the Account page
    };
    return <button onClick={handleClick}>Account</button>;
  };
  const ItemButton: React.FC = () => {
    const handleClick = () => {
      window.location.href = './addItem'; // Redirect to the Account page
    };
    return <button onClick={handleClick}>add Item</button>;
  };
  const HomeButton: React.FC = () => {
    const handleClick = () => {
      window.location.href = './Home'; // Redirect to the Account page
    };
    return <button onClick={handleClick}>Home</button>;
  };
  const [ads, setAds] = useState<Ad[]>([]);

  const handleAdSubmit = (newAd: Ad) => {
    setAds([...ads, newAd]); // Add the new ad to the list of ads
  };

  return (
    <div>
      <NewAdPage onAdSubmit={handleAdSubmit} />

      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Typography variant="h4" sx={{ textAlign: "center", mb: 4 }}>
          Available Items
        </Typography>

        <Grid container spacing={4}>
          {ads.map((ad, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ boxShadow: 3 }}>
                {ad.image && (
                  <CardMedia
                    component="img"
                    image={ad.image}
                    alt={ad.title}
                    sx={{ height: 200, objectFit: "cover" }}
                  />
                )}
                <CardContent>
                  <Typography variant="h6">{ad.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Category: {ad.category}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default HomePage;

