document.addEventListener("DOMContentLoaded", function () {
  const projectsContainer = document.getElementById("projectsContainer");
  const template = document.getElementById("project-template").content;

  jProjects.forEach((project) => {
    const clone = template.cloneNode(true);

    clone.querySelector(".work__img").src = project.imgSrc;
    clone.querySelector(".work__img").alt = project.altText;
    clone.querySelector(".work__title").textContent = project.title;
    const descriptionList = clone.querySelector(".work__description");
    descriptionList.innerHTML = "";
    project.description.forEach((point) => {
      const li = document.createElement("li");
      li.textContent = point;
      descriptionList.appendChild(li);
    });

    const dateElement = clone.querySelector(".work__date");
    if (project.date) {
      dateElement.textContent = `Date: ${project.date}`;
    } else {
      dateElement.style.display = "none";
    }

    const playStoreLink = clone.querySelector(".playStore");
    const appStoreLink = clone.querySelector(".appStore");
    const websiteLink = clone.querySelector(".website");

    if (project.playStore) {
      playStoreLink.href = project.playStore;
    } else {
      playStoreLink.style.display = "none";
    }

    if (project.appStore) {
      appStoreLink.href = project.appStore;
    } else {
      appStoreLink.style.display = "none";
    }

    if (project.website) {
      websiteLink.href = project.website;
    } else {
      websiteLink.style.display = "none";
    }

    projectsContainer.appendChild(clone);
  });
});
