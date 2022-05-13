import { Box } from "@material-ui/core";
import Link from "next/link";
import styles from "./BlogItem.module.scss";
import Button from "../Button/Button";
import Image from "next/image";
import { NavigateNextRounded } from "@material-ui/icons";

const BlogItem = ({ blog }) => {
  let { author, title, date, imgSquare, previewText, slug } = blog;

  const options = { year: "numeric", month: "long", day: "numeric" };
  date = new Date(date);
  let dateString = date.toLocaleDateString(undefined, options);

  return (
    <Link href={`/blog/${slug}`}>
      <Box borderRadius={8} className={`${styles["blog_item"]} p-1`}>
        <div
          className={`relative mb-1.5 block h-40 overflow-hidden rounded-md p-1.5`}
        >
          <Image
            src={imgSquare}
            layout="fill"
            className={styles["featured_image"]}
            objectFit="cover"
            objectPosition={"center"}
          />
        </div>
        <Box className="p-1.5">
          <h4 className={`text-lg leading-7 ${styles["blog_title"]} mb-2`}>
            {title}
          </h4>
          <p
            className={`mb-4 text-gray-700 ${styles["blog_description"]} text-sm leading-6 line-clamp-3`}
          >
            {previewText}
          </p>
          <Box component="div" className={styles["blog_author"]}>
            <img
              src="https://miro.medium.com/max/700/0*B_owcQpugXNQbbVu"
              alt={author}
              className={styles["profile_photo"]}
            />
            <Box component="div">
              <h5 className="text-sm font-light text-blue-500">{author}</h5>
              <small className="text-xs text-gray-500">{dateString}</small>
            </Box>
          </Box>
          {/* <Button className={styles["blog_cta"]}>
            <span className="text-uppercase">Read more</span>
          </Button> */}
        </Box>
      </Box>
    </Link>
  );
};

export default BlogItem;
