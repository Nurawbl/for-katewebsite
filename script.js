function showSection(sectionId) {
    let sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    const target = document.getElementById(sectionId);
    target.classList.add('active');

    // Плавный скролл
    target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}


    document.getElementById(sectionId).classList.add('active');
}

document.addEventListener("DOMContentLoaded", function() {
    loadComments("colors"); // Загружаем комментарии для цветов
});

function addComment(section) {
    let commentInput = document.getElementById(`comment-${section}`);
    let commentText = commentInput.value.trim();
    if (commentText === "") return;

    let comments = JSON.parse(localStorage.getItem(`comments-${section}`)) || [];
    comments.push(commentText);
    localStorage.setItem(`comments-${section}`, JSON.stringify(comments));

    commentInput.value = ""; // Очистка поля ввода
    loadComments(section); // Перезагрузка комментариев
}

function loadComments(section) {
    let comments = JSON.parse(localStorage.getItem(`comments-${section}`)) || [];
    let commentList = document.getElementById(`comment-list-${section}`);
    commentList.innerHTML = "";

    comments.forEach(comment => {
        let div = document.createElement("div");
        div.classList.add("comment");
        div.textContent = comment;
        commentList.appendChild(div);
    });
}

function showPopup(text) {
    let popup = document.createElement("div");
    popup.classList.add("popup");

    let popupContent = document.createElement("div");
    popupContent.classList.add("popup-content");
    popupContent.textContent = text;

    let closeButton = document.createElement("span");
    closeButton.classList.add("close-btn");
    closeButton.innerHTML = "&times;";
    closeButton.onclick = function() {
        document.body.removeChild(popup);
    };

    popupContent.appendChild(closeButton);
    popup.appendChild(popupContent);
    document.body.appendChild(popup);
}
// Пример привязки обработчика событий к изображениям в разделе "Любимые персонажи"
document.addEventListener("DOMContentLoaded", function() {
    let characterImages = document.querySelectorAll("#characters img");

    characterImages.forEach(img => {
        img.addEventListener("click", function() {
            let characterName = this.getAttribute("data-name"); // Атрибут с именем
            showPopup(characterName);
        });
    });
});


function showColorMessage(color) {
    alert("Я дальтоник: " + color);
}
function showIcebergInfo() {
    document.getElementById("iceberg-info").style.opacity = "1";
}

function hideIcebergInfo() {
    document.getElementById("iceberg-info").style.opacity = "0";
}
document.addEventListener("DOMContentLoaded", function () {
    const allAudio = document.querySelectorAll("audio");

    allAudio.forEach((audio, index) => {
        // 1. Когда нажимаем Play — ставим остальные на паузу
        audio.addEventListener("play", () => {
            allAudio.forEach((other, i) => {
                if (other !== audio) {
                    other.pause();
                }
            });
        });

        // 2. Когда трек закончился — запускаем следующий
        audio.addEventListener("ended", () => {
            const nextIndex = index + 1;
            if (nextIndex < allAudio.length) {
                allAudio[nextIndex].play();
            }
        });
    });
});
