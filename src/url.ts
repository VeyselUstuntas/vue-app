export class Url{
    static BASE_URL = "https://jsonplaceholder.typicode.com/";
    static POST_URL = "posts/";

    static getFullPostUrl() : string{
        return this.BASE_URL + this.POST_URL;
    }
}