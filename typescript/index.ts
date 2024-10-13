// a simple example of printer with 3 main functionalities 
// print() , scan() , fax() 
// so if we have a simple printer which can only print() we must not use an interface that has having all these methods above
// this is what ISP - interface segregation principle states

// real world implementation of ISP -> like in roles and permission of user

// creating post
// commenting post 
// sharing post

// admin - 3
// regular - 2

// this is ISP -> Interface Segregation Principle

interface PostCreation {
    createPost() : void;
}
interface PostCommentting {
    commentPost() : void;
}

interface PostSharing {
    sharePost() : void;
}

class AdminUser implements PostCreation, PostCommentting, PostSharing {
    createPost(): void {
        
    }
    commentPost(): void {
        
    }
    sharePost(): void {
        
    }
}

class RegularUser implements PostCreation, PostCommentting {
    createPost(): void {
        
    }
    commentPost(): void {
        
    }
}