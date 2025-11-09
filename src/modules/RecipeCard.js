import { Card, CardContent, CardMedia, Typography, Stack, Box } from "@mui/material";
import Tag from "../common/Tag";

export default function RecipeCard({ recipe, onClick, visibleFields }) {
  return (
    <Card
      onClick={() => onClick(recipe)}
      sx={{
        width: { xxs: 120, xs: 190, sm: 250, md: 300, lg: 350, xl: 400, }, 
        height: 320,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: 3,
        boxShadow: 3,
        cursor: "pointer",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: 6,
        },
      }}
    >
    
      <Box sx={{ position: "relative", height: 160, overflow: "hidden" }}>
        <CardMedia
          component="img"
          image={recipe.image || "https://via.placeholder.com/300x200?text=Recipe"}
          alt={recipe.name}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          variant="h6"
          fontWeight={600}
          gutterBottom
          noWrap
          sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
        >
          {recipe.name}
        </Typography>

        {visibleFields.includes("cuisine") && (
          <Typography variant="body2" color="text.secondary">
            {recipe.cuisine}
          </Typography>
        )}

        {visibleFields.includes("rating") && (
          <Typography variant="body2" color="text.secondary">
            {recipe.rating}
          </Typography>
        )}

        {visibleFields.includes("difficulty") && (
          <Typography variant="body2" color="text.secondary">
            Difficulty: {recipe.difficulty}
          </Typography>
        )}

        {visibleFields.includes("cookTimeMinutes") && (
          <Typography variant="body2" color="text.secondary">
            Cook Time: {recipe.cookTimeMinutes} min
          </Typography>
        )}

        {recipe.tags?.length > 0 && (
          <Stack direction="row" spacing={0.5} mt={1} flexWrap="wrap" rowGap={0.5}>
            {recipe.tags.slice(0, 3).map((tag, index) => (
              <Tag key={index} tag={tag} />
            ))}
          </Stack>
        )}
      </CardContent>
    </Card>
  );
}
