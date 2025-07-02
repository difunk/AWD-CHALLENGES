import React, { useEffect, useState } from 'react'

const TypedDomManip = () => {
    useEffect(() => {
        const input = document.getElementById("nameInput") as HTMLInputElement;
        const button = document.getElementById("submitBtn");
        const display = document.getElementById("displayName");
        const toggleBtn = document.getElementById("toggleBtn");
        const hiddenText = document.getElementById("hiddenText") as HTMLParagraphElement

        const itemInput = document.getElementById("itemInput") as HTMLInputElement
        const addBtn = document.getElementById("addBtn")
        const itemList = document.getElementById("itemList")

        const decreaseBtn = document.getElementById("decreaseBtn");
        let counter = document.getElementById("counter");
        const increaseBtn = document.getElementById("increaseBtn");   
 
            if (button && input && display) {
                button.addEventListener("click", () => {
                    display.textContent = input.value;
                });
            }

            if (toggleBtn) {
                toggleBtn.addEventListener("click", () => {
                    hiddenText.style.display = hiddenText.style.display === "none" ? "block" : "none";
                })
            }

            if (itemInput && addBtn && itemList) {
                addBtn.addEventListener("click", () => {
                    var li = document.createElement("li")
                    var deleteBtn = document.createElement("button")
                    deleteBtn.classList.add("deleteBtn")
                    deleteBtn.textContent = "X"
                    deleteBtn.addEventListener("click", () => {
                        li.remove()
                    })

                    const value = itemInput.value;
                    li.append(document.createTextNode(value))
                    li.appendChild(deleteBtn);
                    itemList.appendChild(li)
                })
            }

            if (decreaseBtn && increaseBtn && counter) {
                const currentCounter = counter.textContent
                let num = Number(currentCounter?.trim())

                decreaseBtn.addEventListener("click", () => {
                    num--;
                    console.log(num)
                    counter.textContent = String(num);
                })

                increaseBtn.addEventListener("click", () => {
                   num++;
                   console.log(num)
                   counter.textContent = String(num);
                })
            }
    },[])

  return (
    <div>
        <div style={{ display: "flex", gap: "12px"}}>
            <input type="text" id="nameInput" placeholder="Enter name" />
            <button id="submitBtn">Submit</button>
        </div>

        <p id="displayName"></p>
        <div style={{ display: "flex", gap: "12px"}}>
            <button id="toggleBtn">Toggle Visibility</button>
            <p id="hiddenText">Now you see me!</p>
        </div>

        <div>
            <input type="text" id="itemInput" placeholder="Enter Item" />
            <button id="addBtn">Submit</button>
            <ul id="itemList"></ul>
        </div>

        <div>
            <button id="decreaseBtn">-</button>
            <span id="counter">0</span>
            <button id="increaseBtn">+</button>
        </div>
    </div>
  )
}

export default TypedDomManip