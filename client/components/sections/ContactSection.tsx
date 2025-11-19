import { Mail, Phone } from "lucide-react"
import Section from "../Section"
import Title from "../Title"
import qrCode from "@/assets/qrcode.jpg"
import Image from "next/image"
import ContactSocial from "./ContactSocial"

const ContactSection = () => {
  return (
    <>
      <Section id="contact">
        <Title className="text-center">
          Contact me
        </Title>
        <div className="text-center mt-8">
          <p className="mb-4">Get in touch with me by</p>
          <p className="inline-flex items-center gap-2 text-lg font-semibold">
            <Mail />
            <span>nguyenhuylong.dev@gmail.com</span>
          </p>
          <p className="mb-4">or</p>
          <div className="flex flex-col gap-4 items-center">
            <p className="inline-flex items-center gap-2 text-lg font-semibold"><Phone /> <span>0967568207</span></p>
            <Image src={qrCode} width={200} height={200} alt="zalo qrCode" />
            <ContactSocial />
          </div>
        </div>
      </Section>
    </>
  )
}

export default ContactSection