window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const functionApi = ""; // Set this to your API URL

const getVisitCount = () => {
    let count = 30; // Default count value
    fetch(functionApi)
        .then(response => response.json())
        .then(response => {
            console.log("Website called Function API");
            count = response.count;
            document.getElementById("counter").innerText = count;
        }).catch(function(error){
            console.log(error);
        })
        return count;
};

