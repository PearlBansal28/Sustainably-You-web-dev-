document.addEventListener('DOMContentLoaded', () => {
    const days = document.querySelectorAll('.calendar .days div');
    const timeSlots = document.querySelectorAll('.time-slot');
    const nextButton = document.getElementById('next-button');

    let selectedDate = null;
    let selectedTime = null;

    days.forEach(day => {
        day.addEventListener('click', () => {
            if (selectedDate) {
                selectedDate.classList.remove('selected');
            }
            day.classList.add('selected');
            selectedDate = day;
            checkSelection();
        });
    });

    timeSlots.forEach(slot => {
        slot.addEventListener('click', () => {
            if (selectedTime) {
                selectedTime.classList.remove('selected');
            }
            slot.classList.add('selected');
            selectedTime = slot;
            checkSelection();
        });
    });

    function checkSelection() {
        if (selectedDate && selectedTime) {
            nextButton.disabled = false;
        } else {
            nextButton.disabled = true;
        }
    }

    nextButton.addEventListener('click', () => {
        if (selectedDate && selectedTime) {
            alert(`Selected Date: ${selectedDate.innerText}\nSelected Time: ${selectedTime.innerText}`);
            // Proceed with the next steps
        }
    });
});
