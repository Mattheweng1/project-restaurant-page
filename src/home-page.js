export default function homeLoad() {
    const body = document.getElementById('body');

    // Inside page/body

    const hero = document.createElement('div');
    hero.setAttribute('id', 'hero');

    const mainContent = document.createElement('div');
    mainContent.setAttribute('id', 'mainContent');
    
    body.appendChild(hero);
    body.appendChild(mainContent);

    // Inside page/body/hero

    const heroBox = document.createElement('div');
    heroBox.setAttribute('id', 'heroBox');

    hero.appendChild(heroBox);

    // Inside page/body/hero/heroBox

    const heroText = document.createElement('div');
    heroText.setAttribute('id', 'heroText');

    heroBox.appendChild(heroText);

    // Inside page/body/hero/heroBox/heroText

    const heroHeading = document.createElement('div');
    heroHeading.setAttribute('id', 'heroHeading');
    heroHeading.textContent = 'Sushi for 2 and a half people starting at $42!';

    const heroSubheading = document.createElement('div');
    heroSubheading.setAttribute('id', 'heroSubheading');
    heroSubheading.textContent = `Enjoy some bangin' sushi at home!`;

    const heroParagraphOne = document.createElement('div');
    heroParagraphOne.setAttribute('id', 'heroParagraphOne');
    heroParagraphOne.textContent = 'Customize your sushi gourging session with countless choices of assorted rolls.';

    const heroParagraphTwo = document.createElement('div');
    heroParagraphTwo.setAttribute('id', 'heroParagraphTwo');
    heroParagraphTwo.textContent = `*Don't forget to give your half-serving to your third wheel.`;

    const heroFinePrint = document.createElement('div');
    heroFinePrint.setAttribute('id', 'heroFinePrint');
    heroFinePrint.textContent = `Available for take-out, delivery, or curbside pick-up.`;

    const heroBtns = document.createElement('div');
    heroBtns.setAttribute('id', 'heroBtns');
    
    heroText.appendChild(heroHeading);
    heroText.appendChild(heroSubheading);
    heroText.appendChild(heroParagraphOne);
    heroText.appendChild(heroParagraphTwo);
    heroText.appendChild(heroFinePrint);
    heroText.appendChild(heroBtns);

    // Inside page/body/hero/heroBox/heroText/heroBtns

    const heroBtnOne = document.createElement('div');
    heroBtnOne.setAttribute('id', 'heroBtnOne');
    heroBtnOne.textContent = 'Order Online';

    const heroBtnTwo = document.createElement('div');
    heroBtnTwo.setAttribute('id', 'heroBtnTwo');
    
    heroBtns.appendChild(heroBtnOne);
    heroBtns.appendChild(heroBtnTwo);

    // Inside page/body/mainContent

    const reservationForm = document.createElement('form');
    reservationForm. setAttribute('id', 'reservationForm');

    const content1 = document.createElement('div');
    content1.setAttribute('id', 'content1');

    const content2 = document.createElement('div');
    content2.setAttribute('id', 'content2');
    
    mainContent.appendChild(reservationForm);
    mainContent.appendChild(content1);
    mainContent.appendChild(content2);

    // Inside page/body/mainContent/reservationForm

    const selectRestaurant = document.createElement('select');
    selectRestaurant. setAttribute('id', 'selectRestaurant');
    selectRestaurant. setAttribute('name', 'selectRestaurant');
    const restaurantOptionDefault = document.createElement('option');
    restaurantOptionDefault.textContent = 'Select a Restaurant';
    restaurantOptionDefault.value = '0';
    const restaurantOptionOne = document.createElement('option');
    restaurantOptionOne.textContent = 'Restaurant down the street';
    restaurantOptionOne.value = '1';
    const restaurantOptionTwo = document.createElement('option');
    restaurantOptionTwo.textContent = 'Restaurant in the town over';
    restaurantOptionTwo.value = '2';
    const restaurantOptionThree = document.createElement('option');
    restaurantOptionThree.textContent = 'Restaurant near your office';
    restaurantOptionThree.value = '3';
    const restaurantOptionFour = document.createElement('option');
    restaurantOptionFour.textContent = 'Restaurant with unusually bad service';
    restaurantOptionFour.value = '4';
    const restaurantOptionFive = document.createElement('option');
    restaurantOptionFive.textContent = 'Restaurant a million miles away';
    restaurantOptionFive.value = '5';
    selectRestaurant.appendChild(restaurantOptionDefault);
    selectRestaurant.appendChild(restaurantOptionOne);
    selectRestaurant.appendChild(restaurantOptionTwo);
    selectRestaurant.appendChild(restaurantOptionThree);
    selectRestaurant.appendChild(restaurantOptionFour);
    selectRestaurant.appendChild(restaurantOptionFive);

    const selectPartySize = document.createElement('select');
    selectPartySize.setAttribute('id', 'selectPartySize');
    selectPartySize.setAttribute('name', 'selectPartySize');
    const partySizeOptionOne = document.createElement('option');
    partySizeOptionOne.textContent = '1 person';
    partySizeOptionOne.value = '1';
    const partySizeOptionTwo = document.createElement('option');
    partySizeOptionTwo.textContent = '2 people';
    partySizeOptionTwo.value = '2';
    const partySizeOptionThree = document.createElement('option');
    partySizeOptionThree.textContent = '3 people';
    partySizeOptionThree.value = '3';
    const partySizeOptionFour = document.createElement('option');
    partySizeOptionFour.textContent = '4 people';
    partySizeOptionFour.value = '4';
    const partySizeOptionFive = document.createElement('option');
    partySizeOptionFive.textContent = '5 people';
    partySizeOptionFive.value = '5';
    const partySizeOptionSix = document.createElement('option');
    partySizeOptionSix.textContent = '6 people';
    partySizeOptionSix.value = '6';
    selectPartySize.appendChild(partySizeOptionOne);
    selectPartySize.appendChild(partySizeOptionTwo);
    selectPartySize.appendChild(partySizeOptionThree);
    selectPartySize.appendChild(partySizeOptionFour);
    selectPartySize.appendChild(partySizeOptionFive);
    selectPartySize.appendChild(partySizeOptionSix);

    const selectDate = document.createElement('select');
    selectDate.setAttribute('id', 'selectDate');
    selectDate.setAttribute('name', 'selectDate');
    const dateOptionOne = document.createElement('option');
    dateOptionOne.textContent = 'A Date? With me???';
    dateOptionOne.value = '1';
    const dateOptionTwo = document.createElement('option');
    dateOptionTwo.textContent = 'Today';
    dateOptionTwo.value = '2';
    const dateOptionThree = document.createElement('option');
    dateOptionThree.textContent = 'Tomorrow';
    dateOptionThree.value = '3';
    const dateOptionFour = document.createElement('option');
    dateOptionFour.textContent = `The day you're calling off`;
    dateOptionFour.value = '4';
    const dateOptionFive = document.createElement('option');
    dateOptionFive.textContent = `Someday, I swear`;
    dateOptionFive.value = '5';
    const dateOptionSix = document.createElement('option');
    dateOptionSix.textContent = 'Raisins are better';
    dateOptionSix.value = '6';
    selectDate.appendChild(dateOptionOne);
    selectDate.appendChild(dateOptionTwo);
    selectDate.appendChild(dateOptionThree);
    selectDate.appendChild(dateOptionFour);
    selectDate.appendChild(dateOptionFive);
    selectDate.appendChild(dateOptionSix);

    const selectTime = document.createElement('select');
    selectTime.setAttribute('id', 'selectTime');
    selectTime.setAttribute('name', 'selectTime');
    const timeOptionOne = document.createElement('option');
    timeOptionOne.textContent = '9:00';
    timeOptionOne.value = '1';
    const timeOptionTwo = document.createElement('option');
    timeOptionTwo.textContent = 'The other 9:00';
    timeOptionTwo.value = '2';
    const timeOptionThree = document.createElement('option');
    timeOptionThree.textContent = `It's relative.`;
    timeOptionThree.value = '3';
    const timeOptionFour = document.createElement('option');
    timeOptionFour.textContent = `The witching hour... BOO!`;
    timeOptionFour.value = '4';
    const timeOptionFive = document.createElement('option');
    timeOptionFive.textContent = `Some time between 3:34 and 3:33`;
    timeOptionFive.value = '5';
    const timeOptionSix = document.createElement('option');
    timeOptionSix.textContent = '11:11, make a wish!';
    timeOptionSix.value = '6';
    selectTime.appendChild(timeOptionOne);
    selectTime.appendChild(timeOptionTwo);
    selectTime.appendChild(timeOptionThree);
    selectTime.appendChild(timeOptionFour);
    selectTime.appendChild(timeOptionFive);
    selectTime.appendChild(timeOptionSix);

    const reserveBtn = document.createElement('button');
    reserveBtn.setAttribute('id', 'reserveBtn');
    reserveBtn.textContent = 'Find a Table';
    
    reservationForm.appendChild(selectRestaurant);
    reservationForm.appendChild(selectPartySize);
    reservationForm.appendChild(selectDate);
    reservationForm.appendChild(selectTime);
    reservationForm.appendChild(reserveBtn);

    // Inside page/body/mainContent/content1

    const C1_left1 = document.createElement('div');
    C1_left1.classList.add('left1');

    const C1_right1 = document.createElement('div');
    C1_right1.classList.add('right1');
    
    const C1_left2 = document.createElement('div');
    C1_left2.classList.add('left2');

    const C1_right2 = document.createElement('div');
    C1_right2.classList.add('right2');
    
    content1.appendChild(C1_left1);
    content1.appendChild(C1_right1);
    content1.appendChild(C1_left2);
    content1.appendChild(C1_right2);

    // Inside page/body/mainContent/content1/.left1

    const C1L1_heading = document.createElement('div');
    C1L1_heading.classList.add('heading');
    C1L1_heading.innerHTML = 'Experience <span>Food</span>';

    const C1L1_paragraph = document.createElement('div');
    C1L1_paragraph.classList.add('paragraph');
    C1L1_paragraph.textContent =  `We have the RAWEST sushi, the JUICIEST meats, the SOUPIEST soups. Let me tell you... You will DROWN in the mm mm goodness.`

    const C1L1_btn = document.createElement('div');
    C1L1_btn.classList.add('btn');
    C1L1_btn.textContent = `Find a Location`;
    
    C1_left1.appendChild(C1L1_heading);
    C1_left1.appendChild(C1L1_paragraph);
    C1_left1.appendChild(C1L1_btn);

    // Inside page/body/mainContent/content1/.left2

    const C1L2_image1 = document.createElement('div');
    C1L2_image1.classList.add('image');

    const C1L2_image2 = document.createElement('div');
    C1L2_image2.classList.add('image');
    
    const C1L2_image3 = document.createElement('div');
    C1L2_image3.classList.add('image');

    const C1L2_image4 = document.createElement('div');
    C1L2_image4.classList.add('image');
    
    const C1L2_image5 = document.createElement('div');
    C1L2_image5.classList.add('image');

    const C1L2_image6 = document.createElement('div');
    C1L2_image6.classList.add('image');
    
    C1_left2.appendChild(C1L2_image1);
    C1_left2.appendChild(C1L2_image2);
    C1_left2.appendChild(C1L2_image3);
    C1_left2.appendChild(C1L2_image4);
    C1_left2.appendChild(C1L2_image5);
    C1_left2.appendChild(C1L2_image6);

    // Inside page/body/mainContent/content1/.right2

    const C1R2_heading = document.createElement('div');
    C1R2_heading.classList.add('heading');
    C1R2_heading.innerHTML = '<span>Noodles</span> and <span>Soups</span>';

    const C1R2_paragraph = document.createElement('div');
    C1R2_paragraph.classList.add('paragraph');
    C1R2_paragraph.textContent =  `Soup so good, you're just going to want to hop in. Splash. Yes, grab the noodles. The noodles are your friends. Mmm. That's the good stuff.`

    const C1R2_btn = document.createElement('div');
    C1R2_btn.classList.add('btn');
    C1R2_btn.textContent = `Bathe in the soup NOW`;
    
    C1_right2.appendChild(C1R2_heading);
    C1_right2.appendChild(C1R2_paragraph);
    C1_right2.appendChild(C1R2_btn);

    // Inside page/body/mainContent/content2

    /* // Inside page/footer

    const returnToTop = document.createElement('div');
    returnToTop.setAttribute('id', 'returnToTop');

    returnToTop.textContent = 'Return to Top';

    footer.appendChild(returnToTop); */
};