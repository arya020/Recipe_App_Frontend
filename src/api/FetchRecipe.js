export default async function FetchRecipe(query) {

    try {
        const response = await fetch(`https://appserver-vtos.onrender.com/search?q=${query}`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
        },
        mode: "cors",
        });
        if (!response.ok) throw new Error("Failed to fetch recipes");

        const data = await response.json();
        return data; 

    } catch (error) {
        console.error("Error fetching recipes:", error);
        return [];
    }

}
