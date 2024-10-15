'use client';

import SectionHeader from '@/components/section-header';
import {sectionsConfig} from '@/config/section';
import {fadeIn} from '@/utils/motion';
import {useState} from 'react';
import emailjs from '@emailjs/browser';
import {siteConfig} from '@/config/site';
import {Button} from '@/components/ui/button';
import {Section} from '@/components/section';
import {useToast} from '@/hooks/use-toast';
import {MotionDiv} from '@/components/motion';

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
  const {toast} = useToast();

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined,
  ) {
    if (e === undefined) return;
    const {name, value} = e.target;
    setForm({...form, [name]: value});
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement> | undefined) {
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
          toast({
            description: '메일이 전송되었습니다.',
          });
          setForm(INITIAL_STATE);
        },
        (error) => {
          setLoading(false);
          toast({
            description: '메일 전송이 실패했습니다.',
          });
        },
      );
  }

  return (
    <Section id='contact' className='mt-5 flex gap-10'>
      <MotionDiv
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className='flex w-full overflow-hidden rounded-xl border border-primary bg-card'
      >
        <div className='relative w-full'>
          <video
            autoPlay
            loop
            muted
            playsInline
            className='absolute left-0 top-0 h-full w-full object-cover'
          >
            <source src='/images/sky.webm' type='video/webm' />
            브라우저가 비디오 태그를 지원하지 않습니다.
          </video>

          <div className='relative z-10 flex h-full items-center justify-center'>
            <div className='my-20 w-full max-w-xl rounded-lg bg-card bg-opacity-70 p-8 shadow-lg'>
              <SectionHeader useMotion={false} {...sectionsConfig.contact} />
              <form
                onSubmit={handleSubmit}
                className='mt-5 flex flex-col gap-3'
              >
                {Object.keys(sectionsConfig.contact.form).map((input) => {
                  const {span} =
                    sectionsConfig.contact.form[
                      input as keyof typeof sectionsConfig.contact.form
                    ];
                  const Component = input === 'message' ? 'textarea' : 'input';
                  const inputId = `contact-${input}`;

                  return (
                    <label
                      key={input}
                      className='flex flex-col'
                      htmlFor={inputId}
                    >
                      <span className='mb-2 text-sm text-secondary sm:text-base'>
                        {span}
                      </span>
                      <Component
                        id={inputId}
                        type={input === 'email' ? 'email' : 'text'}
                        name={input}
                        value={form[`${input}`]}
                        onChange={handleChange}
                        className='rounded-lg px-4 py-3 text-sm sm:text-base'
                        autoComplete='on'
                        {...(input === 'message' && {rows: 4})}
                      />
                    </label>
                  );
                })}
                <Button type='submit'>{loading ? 'Sending...' : 'Send'}</Button>
              </form>
            </div>
          </div>
        </div>
      </MotionDiv>
    </Section>
  );
}
