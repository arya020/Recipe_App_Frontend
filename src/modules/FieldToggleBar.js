import { Stack, Button, Typography } from "@mui/material";

export default function FieldToggleBar({ visibleFields, handleFieldToggle }) {
 
  const fieldOptions = [
    { label: "Cuisine", value: "cuisine" },
    { label: "Difficulty", value: "difficulty" },
    { label: "Cook Time", value: "cookTimeMinutes" },
    { label: "Rating", value: "rating" }
  ];

  return (
    <Stack
      direction="row"
      spacing={1.5}
      alignItems="center"
      flexWrap="wrap"
      sx={{ mb: 2 }}
    >
      <Typography variant="subtitle1" fontWeight={600}>
        Show:
      </Typography>

      {fieldOptions.map((field) => {
        const isActive = visibleFields.includes(field.value);
        return (
          <Button
            key={field.value}
            variant={isActive ? "contained" : "outlined"}
            color={isActive ? "primary" : "inherit"}
            size="small"
            onClick={() => handleFieldToggle(field.value)}
            sx={{
              borderRadius: "50px",
              textTransform: "none",
              fontWeight: 500,
              backgroundColor: isActive ? "#242e3cff" : "#fff",
              boxShadow: "none"
            }}
          >
            {field.label}
          </Button>
        );
      })}
    </Stack>
  );
}
