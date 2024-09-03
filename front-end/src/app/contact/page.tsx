'use client';

import SectionHeader from '@/components/section-header';
import {sectionsConfig} from '@/config/section';
import {fadeIn} from '@/utils/motion';
import {motion} from 'framer-motion';
import {useState} from 'react';
import emailjs from '@emailjs/browser';
import {siteConfig} from '@/config/site';
import {Button} from '@/components/ui/button';

const INITIAL_STATE = Object.fromEntries(
  Object.keys(sectionsConfig.contact.form).map((input) => [input, '']),
);

const emailjsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  accessToken: process.env.NEXT_PUBLIC_EMAILJS_ACCESS_TOKEN,
};

export default function Contact() {
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined,
  ) => {
    if (e === undefined) return;
    const {name, value} = e.target;
    setForm({...form, [name]: value});
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | undefined) => {
    if (e === undefined) return;
    e.preventDefault();
    setLoading(true);

    if (!emailjsConfig.serviceId || !emailjsConfig.templateId) {
      throw new Error('Unexpected error: Missing emailjs config');
    }

    emailjs
      .send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          form_name: form.name,
          to_name: siteConfig.creator,
          from_email: form.email,
          to_email: siteConfig.email,
          message: form.message,
        },
        emailjsConfig.accessToken,
      )
      .then(
        () => {
          setLoading(false);
          alert('메일이 전송되었습니다.');

          setForm(INITIAL_STATE);
        },
        (error) => {
          setLoading(false);

          console.log(error);
          alert('메일 전송이 실패했습니다.');
        },
      );
  };

  return (
    <section className='mt-24 flex gap-10 '>
      <motion.div
        initial='offScreen'
        whileInView='onScreen'
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className='flex w-full overflow-hidden rounded-xl border border-primary bg-card'
      >
        <div className='flex-1 p-8'>
          <SectionHeader useMotion={false} {...sectionsConfig.contact} />
          <form onSubmit={handleSubmit} className='mt-10 flex flex-col gap-8'>
            {Object.keys(sectionsConfig.contact.form).map((input) => {
              const {span, placeholder} =
                sectionsConfig.contact.form[
                  input as keyof typeof sectionsConfig.contact.form
                ];
              const Component = input === 'message' ? 'textarea' : 'input';

              return (
                <label key={input} className='flex flex-col'>
                  <span className='mb-2 text-secondary'>{span}</span>
                  <Component
                    type={input === 'email' ? 'email' : 'text'}
                    name={input}
                    value={form[`${input}`]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className='rounded-lg px-6 py-4'
                    {...(input === 'message' && {rows: 6})}
                  />
                </label>
              );
            })}
            <Button type='submit'>{loading ? 'Sending...' : 'Send'}</Button>
          </form>
        </div>
        <div className='hidden w-full flex-1 bg-primary object-cover md:block'>
          {/* <img
            src={'/images/laptop.jpg'}
            alt={'contact'}
            className='h-full w-full object-cover'
          /> */}
        </div>
      </motion.div>
    </section>
  );
}
