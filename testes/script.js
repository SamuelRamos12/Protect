function updateProgress() {
    const lessons = document.querySelectorAll('#lesson-list input[type="checkbox"]');
    const totalLessons = lessons.length;
    let completedLessons = 0;

    lessons.forEach(lesson => {
        if (lesson.checked) {
            completedLessons++;
        }
    });

    const progress = (completedLessons / totalLessons) * 100;
    const progressBar = document.getElementById('progress-bar');
    const progressPercentage = document.getElementById('progress-percentage');

    progressBar.style.width = progress + '%';
    progressPercentage.innerText = progress.toFixed(2) + '%';
}

function resetProgress() {
    const lessons = document.querySelectorAll('#lesson-list input[type="checkbox"]');
    lessons.forEach(lesson => {
        lesson.checked = false;
    });

    const progressBar = document.getElementById('progress-bar');
    const progressPercentage = document.getElementById('progress-percentage');

    progressBar.style.width = '0%';
    progressPercentage.innerText = '0%';
}
