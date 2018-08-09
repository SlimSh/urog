import * as React from "react";
import { Button } from "semantic-ui-react";
import IUser from "../interfaces/User.interface";
import { TransitionablePortal } from "semantic-ui-react";
import { Transition } from "semantic-ui-react";
export default class UsersList extends React.Component<any, any> {
  public message: string;

  constructor(props: any) {
    super(props);
    this.message = "Some me string";
    this.state = {
      visible: true
    };
  }
  handleClick = () => {
    this.setState({
      visible: !this.state.visible
    });
  };
  renderView = () => {
    console.log('wrap');

    let wrap = document.querySelector(".wrap");
    function onEntry(entry: any) {
      console.log(document.querySelectorAll("img"));
      // console.log(entry);
      entry.forEach((change: any) => {
        if (change.isIntersecting) {
          change.target.classList.add("visible");
        }
      });
    }

    // list of options
    let options = {
    //   target: wrap,
      threshold: [.7]
    };

    // instantiate a new Intersection Observer
    let observer = new IntersectionObserver(onEntry, options);

    // list of paragraphs
    let elements = document.querySelectorAll("img, p");

    // loop through all elements
    // pass each element to observe method
    // ES2015 for-of loop can traverse through DOM Elements
    for (let elm of elements) {
      observer.observe(elm);
    }
  };
  componentDidMount(){
    this.renderView();
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleClick}>Click Here</Button>
        <TransitionablePortal
          open={this.state.visible}
          transition={{ animation: "scale", duration: 300 }}
        >
          <h1>{this.message}</h1>
        </TransitionablePortal>
        <Transition duration={100} visible={this.state.visible}>
          <div className="wrap">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              consectetur porro voluptates nesciunt similique, facilis ex omnis
              tempore pariatur dolorem minus sed, ratione adipisci impedit illo,
              nemo maiores aperiam nihil!
            </p>
            <p>
              Excepturi dignissimos, saepe atque cupiditate maxime neque!
              Numquam nemo officia, officiis delectus temporibus omnis voluptas
              aliquid facere ipsa eveniet quam nulla tenetur nobis dolorum
              ratione, fugit neque sed nisi labore?
            </p>
            <p>
              Quos nostrum reiciendis vel, rerum exercitationem amet officiis
              quam minima eaque corrupti velit molestias natus. Autem,
              perspiciatis soluta? Fugit omnis recusandae alias expedita
              molestias? Aliquam, dolores! Debitis architecto quas dignissimos!
            </p>
            <p>
              Ducimus sequi esse eius suscipit a, voluptatibus doloremque
              explicabo rem fugit, omnis possimus autem totam, nihil sint minima
              id! Veritatis totam magnam tenetur dignissimos minima accusantium
              maiores aut sequi suscipit!
            </p>
            <img
              src="http://www.kinyu-z.net/data/wallpapers/19/766862.jpg"
              width="100%"
              className="img_01"
            />
            <p>
              Iure dolorum nemo blanditiis expedita voluptatem consequatur non
              reprehenderit tempore. Ullam officiis harum ab nemo sint
              asperiores veritatis quas quibusdam, quaerat eligendi et? Sunt,
              aut corrupti voluptatum qui earum voluptates.
            </p>
            <p>
              Porro ipsa laborum commodi eveniet, nobis nisi nulla fugiat
              officiis odit blanditiis voluptate cupiditate iusto, ex
              voluptatibus doloremque iure. Dignissimos labore, cupiditate
              corrupti veniam id quasi dolores dicta nisi numquam?
            </p>
            <p>
              Mollitia quas eaque blanditiis ipsam cum, quae veniam maxime
              architecto ea cupiditate, esse, rerum exercitationem pariatur
              praesentium illo! Reiciendis odio voluptates nisi cupiditate
              libero earum accusantium, velit ratione temporibus provident!
            </p>
            <p>
              Ratione nulla cupiditate dolores nesciunt facere blanditiis
              delectus officia! Consequuntur rerum nemo dolor dolorum dolore,
              natus vitae est eos repudiandae fugit a quas facere ea minima?
              Placeat nobis dolore animi.
            </p>
            <p>
              Doloribus praesentium beatae recusandae eligendi consectetur
              obcaecati illo omnis laborum, corporis, vitae tempore. Saepe, enim
              vero. Impedit facere blanditiis tenetur doloremque inventore
              repudiandae quas maiores omnis necessitatibus voluptatibus?
              Consequuntur, doloribus!
            </p>
            <img
              src="http://www.hdnicewallpapers.com/Walls/Big/Bikes/Amazing_Bike_Stunt_Images.jpg"
              width="100%"
              className="img_02"
            />
            <p>
              Magni eligendi beatae ipsum dolor nostrum cupiditate iste
              veritatis placeat nobis, corporis ratione exercitationem, aliquam
              et optio sed minima officiis reiciendis saepe porro praesentium
              iure labore! Voluptatum molestiae soluta eaque.
            </p>
            <p>
              Dolore ad laboriosam distinctio natus repudiandae labore
              reiciendis, tenetur esse, ipsum debitis autem, iure aspernatur.
              Sint nihil a, non quisquam ex saepe et impedit. Provident rerum
              minima quidem tempore alias?
            </p>
            <p>
              Provident, nesciunt. Ea vero tempore, vel rerum alias ipsum itaque
              omnis similique provident sequi at officia illo. Asperiores
              distinctio corrupti, saepe sint unde dicta? Vel architecto nemo
              praesentium aperiam quod.
            </p>
            <p>
              Enim quibusdam voluptas, magni, dicta accusamus quis ut ratione
              sit facere maxime hic modi cumque voluptate odit voluptatibus
              ipsam? Quas veritatis velit doloribus molestias est praesentium
              vel voluptatum dolorum voluptates.
            </p>
            <p>
              Alias debitis natus ex! Quae, quas! Repellat dolorum quibusdam
              aliquam quaerat beatae sunt, quisquam obcaecati molestias error
              laboriosam, odio provident dignissimos, reiciendis reprehenderit
              aliquid ex minus quae libero debitis facere?
            </p>
            <p>
              Quisquam eius id aut quam sed nulla fugiat explicabo odio at culpa
              libero suscipit ut assumenda earum atque sit, illo minus illum ea
              aspernatur deserunt voluptates soluta! Totam, laborum aspernatur!
            </p>
            <img
              src="http://www.kinyu-z.net/data/wallpapers/19/766869.jpg"
              width="100%"
              className="img_03"
            />
            <p>
              Magni ea dolor eos rem minima vitae aliquid suscipit sunt aut
              alias nesciunt impedit, laboriosam, labore earum corporis,
              temporibus ipsa. Explicabo eos et veniam mollitia cum, placeat
              suscipit? Exercitationem, necessitatibus.
            </p>
            <p>
              Dolorem quia architecto laudantium voluptas vel sapiente et
              perspiciatis officiis laborum doloribus unde, fugiat, alias
              debitis! Earum atque fuga, labore quisquam laborum quis, nisi
              repellendus ut, iure tempora placeat nostrum.
            </p>
            <img
              src="http://www.kinyu-z.net/data/wallpapers/19/766864.jpg"
              width="100%"
              className="img_04"
            />
            <p>
              Similique esse facere, minima expedita dignissimos reiciendis
              voluptate modi odio nobis nemo dolorem laborum commodi.
              Perferendis, atque nam! Beatae facere ipsa incidunt blanditiis?
              Vitae, ullam necessitatibus fuga similique qui voluptatibus!
            </p>
            <p>
              Consectetur quo esse exercitationem nulla? Corrupti non deserunt
              tenetur aliquam, eum totam voluptatum fugiat eveniet nulla rerum
              maxime ad nemo vitae temporibus porro. Vero, laborum rerum
              aspernatur tempora officia alias.
            </p>
            <p>
              Placeat repudiandae inventore deleniti odit atque dolorum quae
              sequi eius obcaecati veritatis nihil, aperiam ad eveniet tempora,
              ipsum distinctio modi autem veniam magni maiores eos. Voluptates
              laborum minima facere tempore.
            </p>
          </div>
        </Transition>
      </div>
    );
  }
}
