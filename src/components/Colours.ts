

export default class Colours {


    public async getColours() {
		let colours: any[] = [];
		const url = (true) ?
		'http://localhost:4000/hexbot' :
		'https://api.noopschallenge.com/hexbot?count=3';
		let response = await fetch(url);
		let json = await response.json();
		json.colors.forEach((element:any) => {
			colours.push(element.value);
		});
        console.log(json);
        return colours;
	}
}