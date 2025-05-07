const container_status_script = document.querySelector(".container-status-script-itens")
const container_status_executor = document.querySelector(".container-status-executor-itens")

function create_element_script(title, status) {
    const container = document.createElement("div")
    container.classList.add("container-status-item")
    const title_text = document.createElement("h3")
    title_text.textContent = title
    const status_text = document.createElement("span")
    status_text.textContent = status;
    container.appendChild(title_text)
    container.appendChild(status_text)
    container_status_script.appendChild(container)
}

function create_element_executor(title, status) {
    const container = document.createElement("div")
    container.classList.add("container-status-item")
    const title_text = document.createElement("h3")
    title_text.textContent = title
    const status_text = document.createElement("span")
    status_text.textContent = status;
    container.appendChild(title_text)
    container.appendChild(status_text)
    container_status_executor.appendChild(container)
}

async function main_script() {
     const response = await fetch("https://raw.githubusercontent.com/MinecraftCardioMessageDeus/Modules/refs/heads/main/Status.json")
     const data_text = await response.text()
     const data = JSON.parse(data_text)
 
     const { game_status, executor_status } = data
 
     Object.keys(game_status).forEach(key => {
         const element = game_status[key]
         create_element_script(key, element)
     })
 
     Object.keys(executor_status).forEach(key => {
         const element = executor_status[key]
         create_element_executor(key, element)
     })
 }
main_script()
