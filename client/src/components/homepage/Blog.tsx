import BlogCard from "./BlogCard";
import Blo1Img from "../../assets/mon_pomeranian-running.png";
import Blo2Img from "../../assets/mon_samoyed-eating.png";
import Blo3Img from "../../assets/mon_couch-destroyed-by-dog.png";
import { InlineIcon } from "@iconify/react";
import "./Blog.css";

export default function Blog() {
  return (
    <section id="blog">
      <div className="blog-wrapper">
        <div className="blog-header">
          <div className="blog-heading">
            <p className="body-m">You already know?</p>
            <h2 className="heading-xs bold">Useful Pet Knowledge</h2>
          </div>
          <button className="button-outline">
            View more <InlineIcon icon="ci:chevron-right-md" width={18} />
          </button>
        </div>

        <div className="blog-cards">
          <a href="">
            <BlogCard
              title="What is a Pomeranian? How to Identify Pomeranian Dogs"
              description="The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed."
              image={Blo1Img}
              imgAlt="Pomeranian running in the park."
            />
          </a>
          <a href="">
            <BlogCard
              title="Dog Diet You Need To Know"
              description="Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance."
              image={Blo2Img}
              imgAlt="Samoyed in front of a plate of food."
              customClass="blog-card-2"
            />
          </a>
          <a href="">
            <BlogCard
              title="Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively"
              description="Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog."
              image={Blo3Img}
              imgAlt="Man scolding dog for destroying couch."
            />
          </a>
        </div>
      </div>
    </section>
  );
}
