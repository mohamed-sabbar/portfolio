export default function Contactme(){
    return(<div>
        <form action='Post'>
            
            <h1>Contact me</h1>
            <h2>Get in touch</h2>
            <div>
                <div>
                <img src='/pictures/mail.png'/>
                <p>Email</p>
                <p>Mohamedazrou2003@gmail.com</p>
            </div>
              <div>
                <img src='/pictures/telephone.png'/>
                <p>Phone number</p>
                <p>0638647661</p>
            </div>
                          <div>
                <img src='/pictures/location.png'/>
                <p>Location</p>
                <p>Agadir|Al Hoceima, Morocco</p>
            </div>
            <div>
                <p>Social</p>
                <div>
                    <a><img src='/pictures/linkedin.png' /></a>
                    <a><img src='/pictures/github.png' /></a>
                </div>
            </div>
            <div>
                <label>Name
                    <input type="text" placeholder="name"/>
                </label>
                     <label>email
                    <input type="email" placeholder="name"/>
                </label>
                     <label>Message
                    <input type="text" placeholder="Message"/>
                </label>
                <button type="submit" value="send message" />

            </div>
            </div>
            
        </form>
    </div>);
}