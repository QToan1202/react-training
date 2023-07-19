export const isOverDue = (borrow_date: string): boolean => {
  const currentDate = new Date()
  const examDate = new Date(borrow_date)
  const timeDifference = Math.abs(examDate.getTime() - currentDate.getTime())
  const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24))

  if (daysRemaining >= 10) return true

  return false
}
