/**
 * Key Value Mapping
 */

enum State {
    loading,
    done,
    error,
}

// 우리 서비스에서 global하게 관리하는 상태
type GlobalApiStatus = {
    getUser: State;
    padinateUsers: State | undefined;
    banUser: State | null;
    getPosts: State;
};

// 관리하는 데이터가 중복되는 경우는 따로 관리하면 비효율적이다.
type UserApiStatus = {
    getUser: State;
    padinateUsers: State | undefined;
    banUser: State | null;
};

// 객체 타입이라 key에 따른 value를 참조한다.
type UserApiStatus2 = {
    getUser: GlobalApiStatus['getUser'];
    padinateUsers: GlobalApiStatus['padinateUsers'];
    banUser: GlobalApiStatus['banUser'];
}

// 이것마저 귀찮아서 새로운거 만들었다.
type UserApiStatus3 = {
    [k in 'getUser' | 'padinateUsers' | 'banUser']: GlobalApiStatus[k];
}





// 여기서 Utility에서 유용한 기능을 배울텐데 
// 여기에서 배우기 좋은거 두개 미리 알려주겠다.
// Pick, Omit, Exclude

// Pick: 고르다.
// <대상 타입 입력, 어떤 값들을 뽑아오고 싶은지>
type PickedUserApiStatus = Pick<GlobalApiStatus, 'getUser' | 'banUser' | 'padinateUsers'>;

// Omit: 제외하다.
// <대상 타입 입력, 어떤 값들을 제외하고 싶은지>
type OmitedUserApiStatus = Omit<GlobalApiStatus, 'getPosts'>;





/**
 * keyof: 객체 타입에 keyof를 사용하면 모든 키값들을 Union으로 다 가져온다.
 * keyof 와 in 은 실무에서 정말 많이 쓰는 방법이라 꼭 이해하고 넘어가자.
 */
type AllKeys = keyof GlobalApiStatus;

// 무조건 GlobalApiStatus의 key 값에 해당하는 데이터만 넣을 수 있다.
const key: AllKeys = 'getPosts';
const keyCopy: 'getUser' | 'padinateUsers' | 'banUser' | 'getPosts' = 'getPosts'; 

// 다 가져와서 적용
type KeyOfUserApiStatus = {
    [k in keyof GlobalApiStatus]: GlobalApiStatus[k];
}

// getPosts 빼는 방법
type KeyOfUserApiStatus2 = {
    [k in Exclude<keyof GlobalApiStatus, 'getPosts'>]: GlobalApiStatus[k];
}

// optional property 로 모두 변경
type KeyOfUserApiStatus3 = {
    [k in Exclude<keyof GlobalApiStatus, 'getPosts'>]?: GlobalApiStatus[k];
}




// 재밌는거 하나 더
interface LoadingStatus {
    type: 'loading';
    data: string[];
}

interface ErrorStatus {
    type: 'error';
    message: string;
}

type FetchStatus = LoadingStatus | ErrorStatus;

type StatusType = FetchStatus['type']; // "loading" | "error"