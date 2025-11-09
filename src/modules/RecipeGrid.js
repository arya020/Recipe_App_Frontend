import { Box, Stack } from "@mui/material";
import RecipeCard from "../modules/RecipeCard";
import SortFilterSelect from "../api/SortFilterSelect";
import FieldToggleBar from "../modules/FieldToggleBar";

export default function RecipeGrid({
  recipes,
  sortBy,
  setSortBy,
  visibleFields,
  setVisibleFields,
  onCardClick,
}) {
  const handleFieldToggle = (field) => {
    setVisibleFields((prev) =>
      prev.includes(field) ? prev.filter((f) => f !== field) : [...prev, field]
    );
  };

  return (
    <>
    <Box sx={{ width: "90%", mt: 3, p: { xs: 1, sm: 2, md: 3, lg: 4 } }}>
      <Stack
        direction="row"
        spacing={2}
        mb={2}
        justifyContent="space-between"
        flexWrap="wrap"
      >
        <SortFilterSelect
          label="Sort By"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          options={[
            { label: "Cook Time", value: "cookTimeMinutes" },
            { label: "Tags", value: "tags" },
            { label: "Difficulty", value: "difficulty" },
          ]}
        />
      </Stack>
      <FieldToggleBar
          visibleFields={visibleFields}
          handleFieldToggle={handleFieldToggle}
      />
    </Box>
    <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          overflowX: "hidden",
          gap: 2,
          justifyContent: { xs: "center", sm: "flex-start" },
          pl: { xs: 0.75, sm: 2, md: 3, lg: 5}
        }}
      >
        {recipes.map((recipe) => (
          <Box key={recipe.id} sx={{ flex: "0 0 auto" }}>
            <RecipeCard
              recipe={recipe}
              onClick={onCardClick}
              visibleFields={visibleFields}
            />
          </Box>
        ))}
      </Box>
      </>
  );
}
