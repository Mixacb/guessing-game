class GuessingGame {
    constructor() {	
	this.gues=0;
	this.lastmax=0;
	this.lastmin=0;
}

    setRange(min, max) {
	this.lastmax=max;
	this.lastmin=min;

    }

    guess() {
	if((this.lastmax-this.lastmin)%2==0)
	{this.gues=this.lastmin+(this.lastmax-this.lastmin)/2;
	return this.gues;}
	else
	{this.gues=this.lastmin+(this.lastmax-this.lastmin+1)/2;
	return this.gues;}

    }

    lower() {
	this.lastmax=this.gues;
    }

    greater() {
	this.lastmin=this.gues;
    }
}

module.exports = GuessingGame;
