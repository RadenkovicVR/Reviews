// list of values
const imageList = ['images/susan.jpg', 'images/bob.jpg', 'images/mark.jpg', 'images/donald.jpg']
const nameList = ['Susan Smith', 'Bob Keenan', "Mark Kirwin", 'Donald Kaufman'];
const jobList = ['WEB DEVELOPER', "BOOKMAKER", "EVENTS ORGANIZER", "STREET ENTERTAINER"];
const descriptionList = 
['Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni maxime rerum voluptatem at enim expedita veniam praesentium ut fugiat, sint doloribus consequatur neque ad voluptate a voluptatum voluptas itaque dicta?',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum vestibulum ullamcorper. Donec pulvinar tortor nec metus tristique, vitae congue diam sagittis. Vivamus id nulla eleifend, gravida neque at, iaculis nibh.',
'Morbi quis ante diam. Donec massa magna, rhoncus ut luctus sit amet, condimentum quis neque. Vivamus a hendrerit metus, ac tristique est. Nullam non ultricies mauris. Vivamus id nulla eleifend',
'Vivamus egestas convallis vestibulum. Aliquam leo sapien, commodo lacinia magna et, lacinia elementum mauris. Fusce risus mauris, ullamcorper a interdum at, vehicula sit amet nulla. Suspendisse eget purus sit amet ante varius malesuada sed sit amet lectus.'];


// text
const personImage = document.querySelector('.personImage');
const personName = document.querySelector('.personName');
const personJob = document.querySelector('.personJob');
const personDescription = document.querySelector('.personDescription');
const counter = document.querySelector('.counter');

// buttons
const buttons = document.querySelectorAll('.button');

//initial count
const len = nameList.length;
let count = 0;

// default
personImage.src = 'images/susan.jpg';
personName.textContent = 'Susan Smith';
personJob.textContent = 'WEB DEVELOPER';
personDescription.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni maxime rerum voluptatem at enim expedita veniam praesentium ut fugiat, sint doloribus consequatur neque ad voluptate a voluptatum voluptas itaque dicta?';
counter.textContent = count + 1 + '/' + len;

// logic
buttons.forEach(function (button){
    button.addEventListener('click', function (event){
        const target = event.currentTarget.classList;
        if(target.contains('right')){
            count++;
        } else if (target.contains('left')){
            count--;
        } else {
            random = Math.floor(Math.random() * len);
            checkRandom();
        }
        checkCount();
        setCount();
        increaseCounter();
    })
})

function checkCount(){
    if (count > len - 1){
        personImage.src = imageList[0];
        personName.textContent = nameList[0];
        personJob.textContent = jobList[0];
        personDescription.textContent = descriptionList[0];
        count = 0;
    } else if (count < 0){
        personImage.src = imageList[len - 1];
        personName.textContent = nameList[len - 1];
        personJob.textContent = jobList[len - 1];
        personDescription.textContent = descriptionList[len - 1];
        count = len - 1;
    }
}

function setCount(){
    personImage.src = imageList[count];
    personName.textContent = nameList[count];
    personJob.textContent = jobList[count];
    personDescription.textContent = descriptionList[count];
}

function checkRandom(){
    if (random === count){
        random = Math.floor(Math.random() * len);
        checkRandom();
    } else{
        count = random;
    }
}

function increaseCounter(){
    counter.textContent = count + 1 + '/' + len;
}