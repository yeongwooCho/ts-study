/**
 * 클래스 선언하기
 */

class SampleClass {}

class Game {
    name: string;
    country: string;
    download: number;

    constructor(name: string, country: string, download: number) {
        this.name = name;
        this.country = country;
        this.download = download;
    }

    introduce() {
        return `${this.name}은 ${this.country}에서 제작된 ${this.download}개의 다운로드를 달성한 게임입니다.`;
    }
}

const starcraft = new Game(
    'Star Craft',
    'Star Craft',
    1000000,
)
starcraft.introduce();
// starcraft.changeGame(); // JS는 해당 메소드가 없다는 것을 런타임에 알 수 있다.

