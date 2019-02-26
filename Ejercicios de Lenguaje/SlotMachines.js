
class SlotMachine {
    constructor(name){
        this.name = name;
        this.coins = 0;        
    }

    play(){
        this.coins++;
        if(Boolean(Math.round(Math.random())) && Boolean(Math.round(Math.random())) && Boolean(Math.round(Math.random()))){
            console.log(`Machine: ${this.name} - Congratulations!!!. You won ${this.coins} coins`);
            this.coins = 0;            
        } else {
            console.log(`Machine: ${this.name} -Good luck next time!! Current coins : ${this.coins}`);
            this.coins++;
        }
        
    }
}

function play() {
    const machine = new SlotMachine("machine");
    const machine2 = new SlotMachine("machine2");
    const machine3 = new SlotMachine("machine3");
    const machine4 = new SlotMachine("machine4");
    
    while(true){
        machine.play();
        machine2.play();
        machine3.play();
        machine4.play();        
    }
};

play();