# Drag-to-Reorder Static List

## **Project Overview**

This is a **JavaScript mini-project** that demonstrates how to implement drag-and-drop functionality for reordering items in a static list. Users can **click and hold a task to move it up or down**, changing its priority or order in the list.

**Purpose:**

* Learn advanced JS **drag-and-drop events** (`dragstart`, `dragover`, `drop`)
* Understand **DOM manipulation** for dynamic reordering
* Gain experience updating a **state array** to reflect changes
* Prepare for integrating drag-and-drop into more complex projects like a To-Do app

---

## **Features**

* Static list of tasks that can be reordered by dragging.
* Visual feedback when dragging items (highlight or insertion indication).
* DOM updates dynamically to reflect the new order.
* Optional: underlying JS array can track current task order.

---

## **Project Structure**

```
drag-reorder-static-list/
│
├─ index.html      # Static list markup
├─ style.css       # Basic styling for list and drag visual cues
└─ script.js       # Drag-and-drop logic
```

---

## **How It Works**

1. Each list item (`<li>`) is **draggable**.
2. When dragging starts, the dragged item is stored in memory.
3. As the user moves over other items, the app determines whether to insert the dragged item **above or below** the hovered item.
4. On drop, the DOM is updated to reflect the new order, optionally updating an array representing the list.
5. Visual cues make it clear where the item will be dropped.

---

## **Learning Outcomes**

* Master the **drag-and-drop API** in JavaScript.
* Dynamically manipulate the DOM to reorder elements.
* Understand how to synchronize **UI state with JS data structures**.
* Gain experience with **event-driven programming** beyond simple click events.

---

## **Future Enhancements**

* Integrate with a **full To-Do List app** for dynamic task management.
* Persist task order using **LocalStorage**.
* Add **animations** for smoother drag-and-drop experience.
* Enable dragging multiple lists or nested items.

---

## **Demo / Screenshots**

*(Optional: add images or GIFs showing tasks being dragged and reordered.)*

---

This README makes it clear this project is **learning-focused**, modular, and ready to be part of your portfolio.
