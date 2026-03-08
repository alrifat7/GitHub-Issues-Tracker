

const messageContainer = document.getElementById('messageContainer');
const issuesContainer = document.getElementById('issuesContainer');
const issuesDetailsModal = document.getElementById("issues-details-modal");

// issues
async function issuesCard(){
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    const data = await res.json();
    displayIssues(data.data);
    
}

function displayIssues(issues){
    console.log(issues);
    issues.forEach(issues => {
        console.log(issues);
        const card = document.createElement("div")
        card.className = "relative flex flex-col justify-between p-5 bg-white border border-gray-100 shadow-sm rounded-xl"
        card.innerHTML = `
                
    <div class=" card-body ">
        
        <div class="flex justify-between">
            <div class="">
                <img class="w-6 h-6" src="./assets/Open-Status.png" alt="">
            </div>
            <div class="">
                <span class="w-6 h-8 text-red-600 bg-red-100 rounded-lg items-center justify-center px-3 py-1 text-xs">${issues.priority}</span>
            </div>
        </div>
        

        <div>    <h2 class="text-xl font-semibold" onclick="openIssuesModal(${issues.id})">${issues.title}</h2>
    <p class="text-gray-500">${issues.description}</p></div>


    <div class="px-5 ">
    <div class="flex gap-2 ">
        <span class="text-center inline-flex items-center justify-center px-3 py-1 text-xs text-red-600 bg-red-200 border rounded-full">${issues.labels[1]}</span>
        <span class="text-yellow-700 inline-flex items-center justify-center px-3 py-1 text-xs bg-yellow-200 border rounded-full">${issues.labels[0]}</span>
    </div>
    <br>
    <hr>
    <div class="text-gray-500">
        <p>${issues.author}</p>
        <p>${issues.createdAt}</p>
    </div>
    </div>
</div>
        `;
        issuesContainer.appendChild(card);
    }) 
}


// modal
function openIssuesModal(issuesId) {
    console.log(issuesId, "issuesId");
    issuesDetailsModal.showModal();
};


issuesCard();
messageTracker();