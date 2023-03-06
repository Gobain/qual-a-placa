const table1080 = document.getElementById("1080p-table");
const table1440 = document.getElementById("1440p-table");
const table2160 = document.getElementById("2160p-table");
const tabButton1 = document.getElementById("tab-button1");
const tabButton2 = document.getElementById("tab-button2");
const tabButton3 = document.getElementById("tab-button3");

const showTab = (tab) => {
    switch (tab) {
        case 'tab1':
            table1440.classList.remove("active-tab");
            table2160.classList.remove("active-tab");
            table1080.classList.add("active-tab");
            tabButton2.classList.remove("active-button");
            tabButton3.classList.remove("active-button");
            tabButton1.classList.add("active-button");
            break;
        case 'tab2':
            table1080.classList.remove("active-tab");
            table2160.classList.remove("active-tab");
            table1440.classList.add("active-tab");
            tabButton1.classList.remove("active-button");
            tabButton3.classList.remove("active-button");
            tabButton2.classList.add("active-button");
            break;
        case 'tab3':
            table1080.classList.remove("active-tab");
            table1440.classList.remove("active-tab");
            table2160.classList.add("active-tab");
            tabButton1.classList.remove("active-button");
            tabButton2.classList.remove("active-button");
            tabButton3.classList.add("active-button");
            break;

        default:
            table1440.classList.remove("active-tab");
            table2160.classList.remove("active-tab");
            table1080.classList.add("active-tab");
            tabButton2.classList.remove("active-button");
            tabButton3.classList.remove("active-button");
            tabButton1.classList.add("active-button");
            break;
    }
}