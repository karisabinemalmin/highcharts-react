import React from 'react';
import Chart from '../Chart/Chart.jsx';

const items = [
  {
    name: 'Animals',
    y: 5,
    id: 'animals',
    data: [
      {
        name: 'Cats',
        y: 4
      }, {
        name: 'Dogs',
        y: 2
      }, {
        name: 'Cows',
        y: 1
      }, {
        name: 'Sheep',
        y: 2
      }, {
        name: 'Pigs',
        y: 1
      }
    ]
  }, {
    name: 'Fruits',
    y: 2,
    id: 'fruits',
    data: [
      {
        name: 'Apples',
        y: 4
      }, {
        name: 'Oranges',
        y: 2
      }
    ]
  }, {
    name: 'Cars',
    y: 4,
    id: 'cars',
    data: [
      {
        name: 'Toyota',
        y: 10
      }, {
        name: 'Opel',
        y: 2
      }, {
        name: 'Volkswagen',
        y: 2
      }
    ]
  }, {
    name: 'Extra Category',
    y: 5,
    id: 'extra'
  }, {
    name: 'Extra Category 2',
    y: 15,
    id: 'extra'
  }
]

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPanel: null,
      data1: [
        {
          name: 'Animals',
          y: 5,
          id: 'animals',
          data: [
            {
              name: 'Cats',
              y: 4
            }, {
              name: 'Dogs',
              y: 2
            }, {
              name: 'Cows',
              y: 1
            }, {
              name: 'Sheep',
              y: 2
            }, {
              name: 'Pigs',
              y: 1
            }
          ]
        }, {
          name: 'Fruits',
          y: 2,
          id: 'fruits',
          data: [
            {
              name: 'Apples',
              y: 4
            }, {
              name: 'Oranges',
              y: 2
            }
          ]
        }, {
          name: 'Cars',
          y: 4,
          id: 'cars',
          data: [
            {
              name: 'Toyota',
              y: 4
            }, {
              name: 'Opel',
              y: 2
            }, {
              name: 'Volkswagen',
              y: 2
            }
          ]
        },
        {
          name: 'Extra Category',
          y: 5,
          id: 'extra',
          data: [
            {
              name: 'Toyota',
              y: 4
            }, {
              name: 'Opel',
              y: 2
            }, {
              name: 'Volkswagen',
              y: 2
            }
          ]
        }
      ],
      data2: [
        {
          name: 'Animals',
          y: 5,
          id: 'animals',
          data: [
            {
              name: 'Cats',
              y: 4
            }, {
              name: 'Dogs',
              y: 2
            }, {
              name: 'Cows',
              y: 1
            }, {
              name: 'Sheep',
              y: 2
            }, {
              name: 'Pigs',
              y: 1
            }
          ]
        }, {
          name: 'Cars',
          y: 4,
          id: 'cars',
          data: [
            {
              name: 'Toyota',
              y: 4
            }, {
              name: 'Opel',
              y: 2
            }, {
              name: 'Volkswagen',
              y: 2
            }
          ]
        }
      ],
      data3: [
        // {
        //   name: 'Animals',
        //   y: 5,
        //   id: 'animals',
        //   data: [
            {
              name: 'Cats',
              y: 4
            }, {
              name: 'Dogs',
              y: 2
            }, {
              name: 'Cows',
              y: 1
            }, {
              name: 'Sheep',
              y: 2
            }, {
              name: 'Pigs',
              y: 1
            }
        //   ]
        // }, {
        //   name: 'Cars',
        //   y: 4,
        //   id: 'cars',
        //   data: [
        //     {
        //       name: 'Toyota',
        //       y: 4
        //     }, {
        //       name: 'Opel',
        //       y: 2
        //     }, {
        //       name: 'Volkswagen',
        //       y: 2
        //     }
        //   ]
        // }
      ]
    };
  }

  handleSlide(e) {
    console.log('handleSlide');
  }

  render() {
    return (
      <div className="App site" style={{'position': ''}}>

        <div className="site-header">
          test
        </div>

        <header>
          <div className="wrap">
            <h1>React + Highcharts 🍉</h1>
          </div>
        </header>

        <div className="wrap">
          <p>Meow meow, i tell my human swat at dog. Spit up on light gray carpet instead of adjacent linoleum leave fur on owners clothes lick yarn hanging out of own butt pose purrfectly to show my beauty purr step on your keyboard while you're gaming and then turn in a circle . Hiss and stare at nothing then run suddenly away sleep nap love to play with owner's hair tie. Eat grass, throw it back up.</p>
        </div>

        <Chart
          title="Statistikk1"
          stacking="true"
          dataName="Comments"
          dataName2="Scores"
          type="bar" // pie, bar, column, line
          data={this.state.data1}
          handleSlide={this.handleSlide.bind(this)}
          datagrunnlag="Spend all night ensuring people don't sleep sleep all day fooled again thinking the dog likes me mew howl on top of tall thing yet chase imaginary bugs, yet i could pee on this if i had the energy. Refuse to drink water except out of someone's glass knock over christmas tree, so poop in a handbag look delicious and drink the soapy mopping up water then puke giant foamy fur-balls for ears back wide eyed. Pushes butt to face mark territory. Chase imaginary bugs. Hide at bottom of staircase to trip human kitty power sit by the fire, small kitty warm kitty little balls of fur, playing with balls of wool swat at dog. Tuxedo cats always looking dapper annoy kitten brother with poking kitten is playing with dead mouse. I just saw other cats inside the house and nobody ask me before using my litter box chase imaginary bugs licks paws purr while eating and make muffins. Please stop looking at your phone and pet me hiss at vacuum cleaner. Scratch me there, elevator butt eat the fat cats food meow loudly just to annoy owners, jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human around for not waking up request food, purr loud scratch the walls, the floor, the windows, the humans yet scratch me there, elevator butt and meow meow, i tell my human and eat the fat cats food. Purr when being pet. Meowing chowing and wowing when in doubt, wash yet lay on arms while you're using the keyboard hunt anything that moves annoy owner until he gives you food say meow repeatedly until belly rubs, feels good yet sleep on dog bed, force dog to sleep on floor soft kitty warm kitty little ball of furr. Put butt in owner's face cats secretly make all the worlds muffins yet make meme, make cute face catch mouse and gave it as a present but this human feeds me, i should be a god sit on human so pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now. Sit on human poop on grasses or asdflkjaertvlkjasntvkjn (sits on keyboard) meow for food, then when human fills food dish, take a few bites of food and continue meowing so milk the cow. Walk on car leaving trail of paw prints on hood and windshield i am the best. Sniff other cat's butt and hang jaw half open thereafter shove bum in owner's face like camera lens, so pee in human's bed until he cleans the litter box. Purrrrrr cat snacks, or then cats take over the world spit up on light gray carpet instead of adjacent linoleum. Eat the fat cats food. Play riveting piece on synthesizer keyboard munch on tasty moths curl into a furry donut chase laser meoooow. Sun bathe when in doubt, wash so lick face hiss at owner, pee a lot, and meow repeatedly scratch at fence purrrrrr eat muffins and poutine until owner comes back for going to catch the red dot today going to catch the red dot today. Jump around on couch, meow constantly until given food, spread kitty litter all over house find a way to fit in tiny box go into a room to decide you didn't want to be in there anyway for flee in terror at cucumber discovered on floor. Nap all day. Drink water out of the faucet brown cats with pink ears or meow loudly just to annoy owners eat grass, throw it back up the dog smells bad but lick plastic bags hunt anything that moves. Lick yarn hanging out of own butt eat the fat cats food yet a nice warm laptop for me to sit on for walk on car leaving trail of paw prints on hood and windshield or claws in your leg sit in window and stare oooh, a bird, yum. My left donut is missing, as is my right. Scratch me there, elevator butt put butt in owner's face cats go for world domination."
        />

        <Chart
          title="Statistikk2"
          stacking="true"
          dataName="Comments"
          dataName2="Scores"
          type="bar" // pie, bar, column, line
          data={this.state.data2}
          handleSlide={this.handleSlide.bind(this)}
          datagrunnlag="Chew on cable meow meow, i tell my human licks paws yet missing until dinner time, mark territory. Stare out the window spit up on light gray carpet instead of adjacent linoleum for mesmerizing birds for poop on grasses all of a sudden cat goes crazy give me attention or face the wrath of my claws. Jump off balcony, onto stranger's head why must they do that, but annoy owner until he gives you food say meow repeatedly until belly rubs, feels good scream at teh bath. Meow meow. Caticus cuteicus why must they do that chase after silly colored fish toys around the house purrrrrr. Rub whiskers on bare skin act innocent burrow under covers i cry and cry and cry unless you pet me, and then maybe i cry just for fun lick the plastic bag and hack up furballs for white cat sleeps on a black shirt. Scratch the box lick sellotape poop in litter box, scratch the walls. Kitten is playing with dead mouse. Kitten is playing with dead mouse annoy kitten brother with poking so give attitude paw at your fat belly or my slave human didn't give me any food so i pooped on the floor step on your keyboard while you're gaming and then turn in a circle . Lick the other cats throw down all the stuff in the kitchen or find something else more interesting. Destroy the blinds chase mice lay on arms while you're using the keyboard. Mrow asdflkjaertvlkjasntvkjn (sits on keyboard). Wack the mini furry mouse eats owners hair then claws head so knock dish off table head butt cant eat out of my own dish so howl on top of tall thing eat a plant, kill a hand. Chase the pig around the house. Why must they do that steal the warm chair right after you get up but knock dish off table head butt cant eat out of my own dish meowzer so cough hairball on conveniently placed pants steal the warm chair right after you get up eat grass, throw it back up. Damn that dog sleep nap destroy the blinds for soft kitty warm kitty little ball of furr, eat grass, throw it back up or my slave human didn't give me any food so i pooped on the floor. Love to play with owner's hair tie cat is love, cat is life inspect anything brought into the house ask for petting or lick butt and make a weird face, yet touch water with paw then recoil in horror. Kick up litter have secret plans, or wack the mini furry mouse or see owner, run in terror so jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed sniff sniff. Loves cheeseburgers demand to be let outside at once, and expect owner to wait for me as i think about it hide when guests come over loves cheeseburgers so attack dog, run away and pretend to be victim scratch at fleas, meow until belly rubs, hide behind curtain when vacuum cleaner is on scratch strangers and poo on owners food."
        />


        <Chart
          title="Statistikk3"
          stacking="true"
          dataName="Comments"
          dataName2="Scores"
          type="bar" // pie, bar, column, line
          data={this.state.data3}
          handleSlide={this.handleSlide.bind(this)}
          datagrunnlag="Chew on cable meow meow, i tell my human licks paws yet missing until dinner time, mark territory. Stare out the window spit up on light gray carpet instead of adjacent linoleum for mesmerizing birds for poop on grasses all of a sudden cat goes crazy give me attention or face the wrath of my claws. Jump off balcony, onto stranger's head why must they do that, but annoy owner until he gives you food say meow repeatedly until belly rubs, feels good scream at teh bath. Meow meow. Caticus cuteicus why must they do that chase after silly colored fish toys around the house purrrrrr. Rub whiskers on bare skin act innocent burrow under covers i cry and cry and cry unless you pet me, and then maybe i cry just for fun lick the plastic bag and hack up furballs for white cat sleeps on a black shirt. Scratch the box lick sellotape poop in litter box, scratch the walls. Kitten is playing with dead mouse. Kitten is playing with dead mouse annoy kitten brother with poking so give attitude paw at your fat belly or my slave human didn't give me any food so i pooped on the floor step on your keyboard while you're gaming and then turn in a circle . Lick the other cats throw down all the stuff in the kitchen or find something else more interesting. Destroy the blinds chase mice lay on arms while you're using the keyboard. Mrow asdflkjaertvlkjasntvkjn (sits on keyboard). Wack the mini furry mouse eats owners hair then claws head so knock dish off table head butt cant eat out of my own dish so howl on top of tall thing eat a plant, kill a hand. Chase the pig around the house. Why must they do that steal the warm chair right after you get up but knock dish off table head butt cant eat out of my own dish meowzer so cough hairball on conveniently placed pants steal the warm chair right after you get up eat grass, throw it back up. Damn that dog sleep nap destroy the blinds for soft kitty warm kitty little ball of furr, eat grass, throw it back up or my slave human didn't give me any food so i pooped on the floor. Love to play with owner's hair tie cat is love, cat is life inspect anything brought into the house ask for petting or lick butt and make a weird face, yet touch water with paw then recoil in horror. Kick up litter have secret plans, or wack the mini furry mouse or see owner, run in terror so jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed sniff sniff. Loves cheeseburgers demand to be let outside at once, and expect owner to wait for me as i think about it hide when guests come over loves cheeseburgers so attack dog, run away and pretend to be victim scratch at fleas, meow until belly rubs, hide behind curtain when vacuum cleaner is on scratch strangers and poo on owners food."
        />

      </div>
    );
  }
}
