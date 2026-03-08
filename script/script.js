

const messageContainer = document.getElementById('messageContainer');
const issuesContainer = document.getElementById('issuesContainer');

async function messageTracker (){


//async await
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issue/{id}');
    const data = await res.json();
    // console.log(data);
    // console.log(messageContainer);
    if (data.data && Array.isArray(data.data)){
        // data.data.forEach(element => {
        //     console.log(element);
            const btn = document.createElement("messageTracker");
            messages.className = "container px-20 pt-2 mx-auto";
            const div = document.createElement("div");
            messages.innerHTML =`
            <div class="flex items-center justify-between gap-4 p-10 py-5 mx-auto mt-5 bg-white shadow">
            <!-- left -->
            <div class="flex justify-between">
            <div class="flex items-center max-w-sm gap-4 mr-5">
                <img src="./assets/Aperture.png" alt="">
            </div>
            <div class="">
                <h2 class="text-2xl font-semibold">${issues.message}</h2>
                <p class="text-gray-400">${issues.status}</p>
            </div>
            </div>

            <!-- right -->
            
            <div class="flex items-center gap-4">
                <div class="">
                    <p class=""><i class="text-green-700 fa-solid fa-circle"></i>Open</p>
                </div>
                <div class="">
                    <p class=""><i class="text-purple-700 fa-solid fa-circle"></i>Closed</p>
                </div>
            </div>
        </div>
            `
            messageContainer.appendChild(div);
        };
    } {
        
    }
    


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
        card.className = "shadow card card-border bg-base-100 w-96 "
        card.innerHTML = `
                
    <div class=" card-body">
        
        <div class="flex justify-between">
            <div class="">
                <img class="w-6 h-6" src="./assets/Open-Status.png" alt="">
            </div>
            <div class="">
                <span class="w-6 h-8 text-red-600 bg-red-100 rounded-lg items-center justify-center px-3 py-1 text-xs">${issues.priority}</span>
            </div>
        </div>
        

        <div>    <h2 class="text-xl font-semibold">${issues.title}</h2>
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

issuesCard();
messageTracker();