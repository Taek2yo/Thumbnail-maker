# Thumbnail-wizard

![](https://velog.velcdn.com/images/taek2yo/post/ba779b7e-411b-4279-aff0-0053e73af25e/image.png)

## TechStack

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"><img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=purple"><img src="https://img.shields.io/badge/ReduxToolkit-654ABA?style=for-the-badge&logo=Redux&logoColor=white"><img alt="Styled-Components" src="https://img.shields.io/badge/Styled Components-DB7093.svg?&style=for-the-badge&logo=styled-components&logoColor=white"/><img alt="Webpack" src="https://img.shields.io/badge/Webpack-8DD6F9.svg?&style=for-the-badge&logo=Webpack&logoColor=black"/><img alt="Babel" src="https://img.shields.io/badge/Babel-F9DC3E.svg?&style=for-the-badge&logo=Babel&logoColor=white"/>
<img alt="Storybook" src="https://img.shields.io/badge/Storybook-FF4785.svg?&style=for-the-badge&logo=Storybook&logoColor=white"/>
<img alt="AWS S3" src="https://img.shields.io/badge/AWS s3-569A31.svg?&style=for-the-badge&logo=Amazon s3&logoColor=white"/>
<img alt="AWS Cloudfront" src="https://img.shields.io/badge/AWS Cloudfront-232F3E.svg?&style=for-the-badge&logo=Amazon AWS&logoColor=white"/>

## Demo URL
# 현재 배포 중단

<a href="https://d19x87tcaeesbn.cloudfront.net/" style="font-size: 30px;">Link</a>

## Desc

📌블로그 포스트용 썸네일 제작

- 기간 : 2023.11.27 ~ 2023.12.10
- 개인 프로젝트


## 핵심 경험

1. Webpack, Babel로 프로젝트 개발환경 구성 및 빌드 속도 개선
<br/> :  불필요한 로더들을 삭제하고 하나로 통합 ( 8.4초 => 3.2초 약 60% 개선 ) 

2. Storybook를 이용한 컴포넌트 단위 테스트
3. AWS S3 + CloudFront 배포

|| S3|CloudFront|
|:------:|:---:|:---:|
|지연 시간| 상대적으로 높음 | 낮음|
|유저 경험|변동적임|빠르고 일관된 성능|
|보안|디도스 방어 불가|디도스 방어 가능|
|데이터 요청 요금<br/>(10,000건 당)|0.0035 USD|HTTP 요청 : 0.009 USD <br/>HTTPS 요청 : 0.012 USD||

CloudFront의 이점은 데이터 요청당 비용이 10,000 건당 약 **0.006 ~ 0.009 USD로 비싸지만**, 속도에서 
CloudFront가 앞서고, 또한, 가장 큰 이점은 보안 측면에서 **디도스 방어**가 가능하다

4. 메모이제이션을 통한 드롭다운 컴포넌트 렌더링 속도 최적화 (1.6ms  =>  0.7ms 약 56% 향상 ) 
