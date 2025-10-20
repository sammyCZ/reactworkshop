document.addEventListener("DOMContentLoaded", () => {
  const linksContainer = document.getElementById("linksContainer");

  const sections = [
    {
      title: "Step 1: Setup Guide",
      links: [
        { name: "React Workshop Setup Guide", path: "Step1_setupGuide/React_Workshop_Setup_Guide.html" }
      ]
    },
    {
      title: "Step 2: React Introduction",
      links: [
        { name: "React Intro", path: "Step2_reactIntro/intro.html" }
      ]
    },
    {
      title: "Step 3: Challenges",
      links: [
        { name: "Challenge 1", path: "Step3_challenges/challenge1.html" },
        { name: "Challenge 2", path: "Step3_challenges/challenge2.html" },
        { name: "Challenge 3", path: "Step3_challenges/challenge3.html" },
        { name: "Challenge 4", path: "Step3_challenges/challenge4.html" },
        { name: "Challenge 5", path: "Step3_challenges/challenge5.html" },
        { name: "Challenge 6", path: "Step3_challenges/challenge6.html" }
      ]
    }
  ];

  sections.forEach(section => {
    const sectionCard = document.createElement("div");
    sectionCard.classList.add("card");

    const sectionTitle = document.createElement("h3");
    sectionTitle.textContent = section.title;
    sectionTitle.style.marginBottom = "8px";
    sectionCard.appendChild(sectionTitle);

    // Add the same dashed divider line below every title
    const hr = document.createElement("hr");
    hr.style.border = "none";
    hr.style.borderTop = "1px dashed rgba(0, 0, 0, 0.06)";
    hr.style.margin = "10px 0 12px";
    sectionCard.appendChild(hr);

    if (section.title.includes("Challenge")) {
      // Horizontal layout for challenges
      const container = document.createElement("div");
      container.style.display = "flex";
      container.style.flexWrap = "wrap";
      container.style.alignItems = "center";
      container.style.justifyContent = "center";
      container.style.gap = "6px";

      section.links.forEach((link, i) => {
        const a = document.createElement("a");
        a.textContent = link.name;
        a.href = link.path;
        a.style.color = "var(--accent-1)";
        a.style.textDecoration = "none";
        a.style.fontWeight = "500";

        a.addEventListener("mouseover", () => (a.style.textDecoration = "underline"));
        a.addEventListener("mouseout", () => (a.style.textDecoration = "none"));

        container.appendChild(a);

        // Divider line between links
        if (i < section.links.length - 1) {
          const divider = document.createElement("span");
          divider.textContent = "|";
          divider.style.color = "var(--muted)";
          divider.style.margin = "0 6px";
          container.appendChild(divider);
        }
      });

      sectionCard.appendChild(container);
    } else {
      // Vertical layout for normal sections
      const list = document.createElement("ul");
      list.style.listStyle = "none";
      list.style.padding = "0";

      section.links.forEach(link => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.textContent = link.name;
        a.href = link.path;
        a.style.color = "var(--accent-1)";
        a.style.textDecoration = "none";
        a.style.fontWeight = "500";
        a.style.display = "block";
        a.style.margin = "4px 0";

        a.addEventListener("mouseover", () => (a.style.textDecoration = "underline"));
        a.addEventListener("mouseout", () => (a.style.textDecoration = "none"));

        li.appendChild(a);
        list.appendChild(li);
      });

      sectionCard.appendChild(list);
    }

    linksContainer.appendChild(sectionCard);
  });
});
