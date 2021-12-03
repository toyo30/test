console.log('aa');

(() => {

    let yOffset = 0; //window.pageYOffset 대신 쓸 변수/ 전체 스크롤 된 값 / 지나온 scene의 높이를 더해준다.

    let prevScrollHeight = 0; //현재 스크롤 위치(yOffset)보다 이전에 위치한 스크롤 섹션들의 스크롤 높이값의 합

    let currentScene = 0; //현재 활성화된 씬

    const sceneInfo = [
        {
            //00
            type: 'sticky',
            heightNum: 5, 
            //브라우저 높이의 5배로 scrollHeight 세팅
            //모든 기기 높이의 5배. 디바이스마다 높이가 다름.
            //기기마다 높이가 다르더라도, 비슷한 경험을 제공. 
            scrollHeight: 0,
            //어디서 열지 모르기 때문에 스크린의 고정값을 주는 것이 아니다. 
            objs: {
                container: document.querySelector('#scroll-section-0'),
                //구간들의 컨테이너 요소 높이값을 정함. html객체들을 모아놓음.

            },
        },
        {   
            //01
            type: 'normal',
            heightNum: 5, 
            scrollHeight: 0, 
            objs: {
                container: document.querySelector('#scroll-section-1')

            }
        },
        {
            //02
            type: 'sticky',
            heightNum: 5, 
            scrollHeight: 0,
            //두 번째 구간 특성이 다르기 때문에 타입을 정해줌
            //sticky 혹은 normal 
            //sticky 스크롤에 따라서 애니메이션 요소가 있음
            objs: {
                container: document.querySelector('#scroll-section-2')

            }
        },
        {
            //03
            type: 'sticky',
            heightNum: 5, 
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-3'),

            }
        
        }
    ];

    function setLayout() {
        //각 스크롤 섹션의 높이 세팅
        for (let i = 0; i < sceneInfo.length; i++) {
            sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
            sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
        };

        console.log(sceneInfo);

        
    }

    

    function scrollLoop() {
        //눈 앞에 현재 스크롤 섹션이 무엇인지 보기 위한 것. 

        prevScrollHeight = 0;
        //값이 누적되지 않은 이전 값을 찍기를 원함. 
        for (let i = 0; i < currentScene; i ++) {
            prevScrollHeight += sceneInfo[i].scrollHeight;
        }

        if (yOffset > prevScrollHeight) {
            
        }
        
    };

    window.addEventListener('resize', setLayout);
    window.addEventListener('scroll', () => {
        yOffset = window.pageYOffset;
        scrollLoop();
    });
    setLayout();
})();