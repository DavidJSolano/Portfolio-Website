import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();
  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section id="contact" className="py-28">
      {/* Headings */}
      <motion.div
        className="flex justify-end w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-yellow">Contact Me</span>
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>

      {/* Form and Image  */}
      <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          className="basis-1/2 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <img src="../assets/contact-image.jpeg" alt="contact" />
        </motion.div>
        <motion.div
          className="basis-1/2 mt-10 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/0fcc26e47c69cf5ebad71ad4745f1617"
            method="POST"
          >
            <input
              className="w-full bg-blue font-semibold placeholder-black p-3 border-black border-2"
              type="text"
              placeholder="Name"
              {...register("name", {
                required: true,
                minLength: 2,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-red mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char"}
                {errors.name.type === "minLength" && "Min length is 2 char"}
              </p>
            )}
            <input
              className="w-full bg-blue font-semibold placeholder-black p-3 border-black border-2"
              type="text"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}
            <textarea
              className="w-full bg-blue font-semibold placeholder-black p-3 border-black border-2"
              type="text"
              placeholder="Message"
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}
            <button
              type="submit"
              className="p-5 bg-yellow font-semibold text-deep-blue mt-5
            hover:bg-red hover:text-white transition duration-500"
            >
              Send me a message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
export default Contact;
