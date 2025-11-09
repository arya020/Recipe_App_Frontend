import { useState, useEffect } from "react";
import FetchRecipe from "../api/FetchRecipe";
import { CircularProgress, Box, Typography } from "@mui/material";
import RecipeGrid from "../modules/RecipeGrid";
import RecipeModal from "../modules/RecipeModal";

export default function RecipeTable({ query }) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState("cookTimeMinutes");
  const [visibleFields, setVisibleFields] = useState(["cuisine", "rating"]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    setLoading(true);
    FetchRecipe(query)
      .then((data) => setRecipes(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [query]);

  const sortedRecipes = [...recipes].sort((a, b) => {
    if (sortBy === "tags") {
      const aFirst = (a.tags?.[0] || "").toLowerCase();
      const bFirst = (b.tags?.[0] || "").toLowerCase();
      return aFirst.localeCompare(bFirst);
    }
    if (typeof a[sortBy] === "number") return a[sortBy] - b[sortBy];
    return a[sortBy]?.localeCompare(b[sortBy]);
  });

  return (
    <Box sx={{ mt: "90px", width: "100%" }}>
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
          <CircularProgress />
        </Box>
      ) : recipes.length > 0 ? (
        <>
          <RecipeGrid
            recipes={sortedRecipes}
            sortBy={sortBy}
            setSortBy={setSortBy}
            visibleFields={visibleFields}
            setVisibleFields={setVisibleFields}
            onCardClick={setSelectedRecipe}
          />
          <RecipeModal
            open={Boolean(selectedRecipe)}
            handleClose={() => setSelectedRecipe(null)}
            recipe={selectedRecipe}
          />
        </>
      ) : (
        <Typography align="center" mt={5}>
          Try fewer words or a different cuisine.
        </Typography>
      )}
    </Box>
  );
}
