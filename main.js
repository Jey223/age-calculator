const calcAge = document.getElementById('age-btn');







const ageShow = () => {

    let birthDay = document.getElementById('day').value;
    let birthMonth = document.getElementById('month').value;
    let birthYear = document.getElementById('year').value;

    const containerElements = document.querySelectorAll('.container');


    if (birthDay.trim() === '' || birthMonth.trim() === '' || birthYear.trim() === '') {
        
        containerElements.forEach(containerElement =>  {

            const existingPTag = containerElement.querySelector('p');
            const label = containerElement.querySelector('label');
            const inputBorderColor = containerElement.querySelector('input');

            const paragraph = document.createElement('p');
            paragraph.className = 'error-message';

            const node = document.createTextNode("This field is required");
            paragraph.appendChild(node);


            if (!existingPTag) {
                containerElement.appendChild(paragraph);
                label.style.color = 'hsl(0, 100%, 67%)';
                inputBorderColor.style.borderColor = 'hsl(0, 100%, 67%)';
            }

        });

    }
     else {
        const today = new Date();
        let presentDay = today.getDate();
        let presentMonth = 1 + today.getMonth();
        let presentYear = today.getFullYear();


        if ( birthDay < 1 || birthDay > 31 || birthMonth < 1 || birthMonth > 12 || birthYear > presentYear ) {
            
            containerElements.forEach((containerElement, i) => {

                const existingPTag = containerElement.querySelector('p');
                const label = containerElement.querySelector('label');
                const inputBorderColor = containerElement.querySelector('input');

                const paragraph = document.createElement('p');
                paragraph.className = 'error-message';

                if (i === 0) {
                    const node = document.createTextNode("Must be a valid day");
                    paragraph.appendChild(node);
                } 
                else if (i === 1) {
                    const node = document.createTextNode("Must be a valid month");
                    paragraph.appendChild(node);
                } else {
                    const node = document.createTextNode("Must be in the past");
                    paragraph.appendChild(node);
                }

                if (!existingPTag) {
                    containerElement.appendChild(paragraph);
                    label.style.color = 'hsl(0, 100%, 67%)';
                    inputBorderColor.style.borderColor = 'hsl(0, 100%, 67%)';
                }
            })
        } 
        else if ( birthDay > 28 && birthMonth === '2' ||
            birthDay > 30 && birthMonth === '4' ||
            birthDay > 30 && birthMonth === '6' ||
            birthDay > 30 && birthMonth === '9' ||
            birthDay > 30 && birthMonth === '11') {
                for (let i = 0; i < containerElements.length; i++) {
                   const existingPTag = containerElements[0].querySelector('p');

                   const paragraph = document.createElement('p');
                    paragraph.className = 'error-message';

                    const node = document.createTextNode("must be a valid date");
                    paragraph.appendChild(node);

                    if (!existingPTag) {
                        containerElements[0].appendChild(paragraph);
                    }
                    containerElements[i].querySelector('label').style.color = 'hsl(0, 100%, 67%)';
                    containerElements[i].querySelector('input').style.borderColor = 'hsl(0, 100%, 67%)';

                }
                
        } 
        else if (birthYear == presentYear && birthMonth > presentMonth || birthYear == presentYear && birthMonth == presentMonth && birthDay > presentDay){

            for (let i = 0; i < containerElements.length; i++) {
                const existingPTag = containerElements[0].querySelector('p');

                const paragraph = document.createElement('p');
                 paragraph.className = 'error-message';

                 const node = document.createTextNode("must be a valid date");
                 paragraph.appendChild(node);

                 if (!existingPTag) {
                     containerElements[0].appendChild(paragraph);
                 }
                 containerElements[i].querySelector('label').style.color = 'hsl(0, 100%, 67%)';
                 containerElements[i].querySelector('input').style.borderColor = 'hsl(0, 100%, 67%)';

             }

        }
        else {

            let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

            if (birthDay > presentDay) {
                presentDay = presentDay + month[presentMonth - 1];
                presentMonth = presentMonth - 1;
            }

            if (birthMonth > presentMonth) {
                presentMonth = presentMonth + 12;
                presentYear = presentYear - 1;
            }

            let dayDifference = presentDay - birthDay;
            let monthDifference = presentMonth - birthMonth;
            let ageDifference = presentYear - birthYear;
            // console.log(presentYear)
            // console.log(birthYear)

            containerElements.forEach(containerElement => {
                const changeTextColor = containerElement.querySelector('label');
                const changeBorderColor = containerElement.querySelector('input');
                changeTextColor.style.color = '';
                changeBorderColor.style.borderColor = '';
            });

            const removeErrorTexts = document.querySelectorAll('p');
            removeErrorTexts.forEach(removeErrorText => {
            removeErrorText.innerText = "";
            });

            const yearsResult = document.querySelectorAll('span')
            yearsResult.innerHTML = '';
        
            for(let i = 0; i < yearsResult.length; i++){
                yearsResult[0].innerText = `${ageDifference}`;
                yearsResult[1].innerText = `${monthDifference}`;
                yearsResult[2].innerText = `${dayDifference}`;
            }
        }
      
    }
   

}

calcAge.addEventListener('click', ageShow);
