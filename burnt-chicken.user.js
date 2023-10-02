// Here You can type your custom JavaScript...


list_dones = [
    [25, 32, 33, 34, 35, 36, 37],
    [19, 20, 21, 23, 24],
    [13, 14, 15, 16, 17],
    [7, 8, 9, 10, 11, 12],
    [1, 2, 3, 4, 5, 6]
]

list_dones.reverse()


function getElementsOnlyInSecondArray(firstArray, secondArray) {
    return secondArray.filter((element) => !firstArray.includes(element));
}

function RUNME_WHEN_READY() {
    // Get all elements with the class "burnt-chicken"
    var bchicks = document.querySelectorAll(".burnt-chicken");

    // Remove each element from the DOM
    bchicks.forEach(function (bchick) {
        bchick.remove();
    });

    // Get the current date and time
    var currentDate = new Date();
    currentDate.setHours(currentDate.getHours() + 8); // Convert to GMT+8

    // Set the cutoff dates
    var cutoffDate1 = new Date('2023-10-07T00:00:00+08:00');
    var cutoffDate2 = new Date('2023-10-14T00:00:00+08:00');

    // Initialize week_past variable
    var week_past;

    // Compare the current date with the cutoff dates
    if (currentDate > cutoffDate2) {
        week_past = 5;
    } else if (currentDate > cutoffDate1) {
        week_past = 4;
    } else {
        week_past = 3; // Default value if none of the conditions are met
    }


    // Get all elements matching ".users_solves__Oan5C"
    const elements = document.querySelectorAll(".users_solves__Oan5C");

    // Iterate over each element
    elements.forEach((elem) => {
        // Declare an empty array to store the last parts for the current element
        const lastParts = [];

        // Get all the nested anchor elements
        const anchorElements = elem.querySelectorAll("a");

        // Iterate over each anchor element
        anchorElements.forEach((anchor) => {
            // Split the href attribute by "=" and get the last part
            const hrefParts = anchor.getAttribute("href").split("=");
            const lastPart = hrefParts[hrefParts.length - 1];

            // Add the last part to the array for the current element
            lastParts.push(parseInt(lastPart));
        });

        // Output the list of last parts for the current element
        console.log(lastParts);

        // Assuming `list_dones` is a 2D list of sublists

        // Iterate over each sublist in `list_dones`
        for (let i = 0; i < list_dones.length; i++) {
            const sublist = list_dones[i];


            missingelem = getElementsOnlyInSecondArray(lastParts, sublist)

            console.log(missingelem)


            if (missingelem.length != 0) {
                const element = missingelem.join(",")

                if (i + 1 <= week_past) {


                    const spanElement = document.createElement('span');
                    spanElement.classList.add("burnt-chicken");

                    const txt = document.createElement('span');
                    txt.style.color = 'red';
                    txt.textContent = `Failed wk${i + 1}:`;

                    spanElement.appendChild(txt);

                    for (var idx = 0; idx < missingelem.length; idx++) {
                        const linkElement = document.createElement('a');
                        linkElement.style.color = 'red';
                        linkElement.href = `/challenges?id=${missingelem[idx]}`;
                        linkElement.textContent = missingelem[idx];

                        spanElement.appendChild(linkElement);

                        if (idx < missingelem.length - 1) {
                            const comma = document.createElement('span');
                            comma.style.color = 'red';
                            comma.textContent = ",";

                            spanElement.appendChild(comma);
                        }
                    }

                    elem.prepend(spanElement);
                } else {




                    const spanElement = document.createElement('span');
                    spanElement.classList.add("burnt-chicken");

                    const txt = document.createElement('span');
                    txt.style.color = 'orange';
                    txt.textContent = `Pls do wk${i + 1}:`;

                    spanElement.appendChild(txt);


                    for (var idx = 0; idx < missingelem.length; idx++) {
                        const linkElement = document.createElement('a');
                        linkElement.style.color = 'orange';
                        linkElement.href = `/challenges?id=${missingelem[idx]}`;
                        linkElement.textContent = missingelem[idx];

                        spanElement.appendChild(linkElement);

                        if (idx < missingelem.length - 1) {
                            const comma = document.createElement('span');
                            comma.style.color = 'orange';
                            comma.textContent = ",";

                            spanElement.appendChild(comma);
                        }
                    }

                    elem.prepend(spanElement);
                }
                break


            }

        }


    })
}


RUNME_WHEN_READY()

// Select the target node
const targetNode = document.documentElement;

// Options for the observer (observe changes to child elements and subtree)
const observerOptions = { childList: true, subtree: true };

// Create an observer instance
const observer = new MutationObserver(function (mutationsList, observer) {
    // Check if the selector is no longer empty
    const elements = document.querySelectorAll(".users_solves__Oan5C");
    if (elements.length > 0) {
        // Disconnect the observer since we don't need to monitor further changes
        observer.disconnect();

        // Call the function when the selector is no longer empty
        RUNME_WHEN_READY();
    }
});

// Start observing the target node for mutations
observer.observe(targetNode, observerOptions);