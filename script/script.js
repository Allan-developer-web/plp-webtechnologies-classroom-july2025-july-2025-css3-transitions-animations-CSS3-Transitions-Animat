// Part 2: JS Functions
    
    // 1. Parameters + Return
    function getRectangleArea(width, height) {
      return width * height;
    }
    function showRectangleArea() {
      const area = getRectangleArea(5, 10);
      alert("Rectangle area (5x10): " + area);
    }

    // 2. Scope Example
    let globalCount = 0; // global
    function incrementCounter() {
      let localMessage = "Inside function"; // local
      globalCount++;
      console.log(localMessage, globalCount);
      alert("Global count is now: " + globalCount);
    }

    // 3. DOM Manipulation
    function setBackgroundColor(elementId, color) {
      const el = document.getElementById(elementId);
      if (el) {
        el.style.backgroundColor = color;
      }
    }

    // 4. Animation Trigger
    function triggerAnimation(elementId, animationClass) {
      const el = document.getElementById(elementId);
      if (el) {
        el.classList.add(animationClass);
        el.addEventListener("animationend", () => {
          el.classList.remove(animationClass);
        }, { once: true });
      }
    }

    
    // Part 3: Combined Demo
  
    function toggleModal() {
      const modal = document.getElementById("myModal");
      modal.classList.toggle("show");
    }
    function startLoading() {
      document.getElementById("spinner").classList.add("spin");
    }

    function stopLoading() {
      document.getElementById("spinner").classList.remove("spin");
    }