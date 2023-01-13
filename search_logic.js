const searchResultsContainer = document.querySelector(".search-results");

function getRecommendedResults(value) {
    searchResultsContainer.innerHTML = "";
    if (value === "") {
        return;
    }
    $.ajax({
        method: "GET",
        url: "search_bar.php?s=" + value,
        processData: false,
        contentType: false,
        success: function (response) {
            console.log(response);
            const res = jQuery.parseJSON(response);
            if (res.status === 404) {
                searchResultsContainer.append("No results found.");
            }
            else if (res.status === 200){
                // on success handler
                const searchResults = res.data;
                for (const searchResultKey in searchResults) {
                    const searchResultElement = document.createElement("div");
                    searchResultElement.innerHTML = searchResults[searchResultKey].email;
                    searchResultsContainer.append(searchResultElement);
                }
            }
        }
    });
}