'use client'

import { useState } from 'react'
import styles from './ContactForm.module.scss'

interface ContactFormValues {
  name: string
  email: string
  subject: string
  message: string
}

type FormErrors = Partial<Record<keyof ContactFormValues, string>>

const INIT_VALUES: ContactFormValues = { name: '', email: '', subject: '', message: '' }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(INIT_VALUES)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {}
    if (!values.name.trim()) newErrors.name = '이름을 입력해 주세요.'
    if (!values.email.trim()) {
      newErrors.email = '이메일을 입력해 주세요.'
    } else if (!EMAIL_RE.test(values.email)) {
      newErrors.email = '올바른 이메일 형식을 입력해 주세요.'
    }
    if (!values.message.trim()) newErrors.message = '메시지를 입력해 주세요.'
    return newErrors
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof ContactFormValues]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className={styles.success} role="alert">
        <div className={styles.successIcon} aria-hidden="true">✓</div>
        <h3 className={styles.successTitle}>메시지가 전달되었습니다!</h3>
        <p className={styles.successBody}>빠른 시일 내에 답변 드리겠습니다. 감사합니다.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      <div className={styles.field}>
        <label htmlFor="name" className={styles.label}>
          이름 <span className={styles.required} aria-hidden="true">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
          value={values.name}
          onChange={handleChange}
          placeholder="홍길동"
          aria-required="true"
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <span id="name-error" className={styles.errorMsg} role="alert">
            {errors.name}
          </span>
        )}
      </div>
      <div className={styles.field}>
        <label htmlFor="email" className={styles.label}>
          이메일 <span className={styles.required} aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
          value={values.email}
          onChange={handleChange}
          placeholder="example@email.com"
          aria-required="true"
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <span id="email-error" className={styles.errorMsg} role="alert">
            {errors.email}
          </span>
        )}
      </div>
      <div className={styles.field}>
        <label htmlFor="subject" className={styles.label}>
          제목
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          className={styles.input}
          value={values.subject}
          onChange={handleChange}
          placeholder="협업 문의드립니다"
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>
          메시지 <span className={styles.required} aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
          value={values.message}
          onChange={handleChange}
          placeholder="안녕하세요! 프로젝트에 대해 이야기 나누고 싶습니다."
          rows={6}
          aria-required="true"
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <span id="message-error" className={styles.errorMsg} role="alert">
            {errors.message}
          </span>
        )}
      </div>
      <button type="submit" className={styles.submitBtn}>
        메시지 보내기
      </button>
    </form>
  )
}
