import { useState, useEffect } from "react";
import FetchRecipe from "../api/FetchRecipe";
import { DataGrid } from "@mui/x-data-grid";
import {
  Box,
  CircularProgress,
  Typography,
  Chip,
  Stack,
} from "@mui/material";

export default function RecipeTable({ query }) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    FetchRecipe(query)
      .then((data) => setRecipes(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [query]);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "image",
      headerName: "Image",
      width: 100,
      renderCell: (params) => (
        <img
          src={params.value}
          alt={params.row.name}
          width={60}
          style={{ borderRadius: 6 }}
        />
      ),
      sortable: false,
      filterable: false,
    },
    { field: "name", headerName: "Name", width: 160 },
    { field: "cuisine", headerName: "Cuisine", width: 130 },
    {
      field: "cookTimeMinutes",
      headerName: "Cook Time (min)",
      width: 140,
      type: "number",
      sortable: true,
    },
    {
      field: "difficulty",
      headerName: "Difficulty",
      width: 120,
    },
    {
      field: "rating",
      headerName: "Rating",
      width: 100,
      type: "number",
    },
    {
      field: "tags", 
      headerName: "Tags",
      width: 220,
      sortable: true,
      renderCell: (params) => (
        <Stack direction="row" spacing={0.5} sx={{ flexWrap: "wrap" }}>
          {params.value?.slice(0, 3).map((tag) => (
            <Chip key={tag} label={tag} size="small" />
          ))}
        </Stack>
      ),
    },
  ];

  return (
    <Box sx={{ mt: "90px", height: "80vh", width: "90%", px: 2 }}>
      {loading === true && (
        <Box display="flex" justifyContent="center" alignItems="center" height="100%">
          <CircularProgress />
        </Box>
      )}
      {recipes.length > 0 ? (
        <DataGrid
          rows={recipes}
          columns={columns}
          pageSize={10}
          getRowHeight={() => 'auto'}
          disableRowSelectionOnClick
          initialState={{
            sorting: {
              sortModel: [{ field: "cookTimeMinutes", sort: "asc" }],
            },
          }}
          sx={{
            '& .MuiDataGrid-cell': {
              lineHeight: '1.5rem',
              py: 1, 
              pb: 1,
            },
            backgroundColor: "#fff",
            boxShadow: 3,
            borderRadius: 2,
          }}
        />
      ) : (
        <Typography align="top" mt={5}>
          Try fewer words or different cuisine
        </Typography>
      )}
    </Box>
  );
}