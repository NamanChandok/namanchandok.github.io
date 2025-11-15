import Skill from "./Skill";
export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto p-6 space-y-12 text-center md:text-left"
    >
      <div className="flex gap-8 items-center">
        <p className="shrink-0 text-lg">
          <span className="text-muted">03.</span> Skills
        </p>
        <hr className="w-full border-muted" />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <h2 className="font-semibold text-2xl md:text-3xl md:w-2/7">
          Programming Languages
        </h2>
        <div className="w-px h-32 bg-muted md:block hidden"></div>
        <div className="flex gap-4 justify-center md:justify-start flex-wrap md:w-5/7">
          <Skill imgUrl="/skills/js.png" name="JavaScript" />
          <Skill imgUrl="/skills/ts.png" name="TypeScript" />
          <Skill imgUrl="/skills/html.png" name="HTML" />
          <Skill imgUrl="/skills/css.png" name="CSS" />
          <Skill imgUrl="/skills/py.png" name="Python" />
          <Skill imgUrl="/skills/mysql.png" name="SQL" />
          <Skill imgUrl="/skills/php.png" name="PHP" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <h2 className="font-semibold text-2xl md:text-3xl md:w-2/7">
          Libraries/Frameworks
        </h2>
        <div className="w-px h-32 bg-muted md:block hidden"></div>
        <div className="flex gap-4 justify-center md:justify-start flex-wrap md:w-5/7">
          <Skill imgUrl="/skills/react.png" name="React.js" />
          <Skill imgUrl="/skills/next.png" name="Next.js" />
          <Skill imgUrl="/skills/express.png" name="Express.js" />
          <Skill imgUrl="/skills/tailwind.png" name="Tailwind CSS" />
          <Skill imgUrl="/skills/firebase.png" name="Firebase" />
          <Skill imgUrl="/skills/mongodb.png" name="MongoDB" />
          <Skill imgUrl="/skills/supabase.png" name="Supabase" />
          <Skill imgUrl="/skills/flask.png" name="Flask" />
          <Skill imgUrl="/skills/node.png" name="Node.js" />
          <Skill imgUrl="/skills/keras.png" name="Keras" />
          <Skill imgUrl="/skills/tensor.png" name="TensorFlow" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <h2 className="font-semibold text-2xl md:text-3xl md:w-2/7">
          Tools/Platforms
        </h2>
        <div className="w-px h-32 bg-muted md:block hidden"></div>
        <div className="flex gap-4 justify-center md:justify-start flex-wrap md:w-5/7">
          <Skill imgUrl="/skills/git.png" name="Git" />
          <Skill imgUrl="/skills/ui.png" name="Figma" />
          <Skill imgUrl="/skills/ps.png" name="Photoshop" />
          <Skill imgUrl="/skills/ae.png" name="After Effects" />
          <Skill imgUrl="/skills/ai.png" name="Illustrator" />
          <Skill imgUrl="/skills/3d.png" name="Blender" />
        </div>
      </div>
    </section>
  );
}
