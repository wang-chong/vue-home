<template>
  <div class="java">
    <pre>
      // 多线程实现实例
      // 继承Thread类，并且覆盖run方法
      class MusicThread extends Thread {
        public void run () {
          for (int i = 0; i < 50; i++) {
            System.out.println('音乐' + i);
          }
        }
      }

      // 实现Runnabled接口，并且覆盖run方法
      class GameThread implements Runnabled {
        public void run () {
          for (int i = 0; i < 50; i++) {
            System.out.println('游戏' + i);
          }
        }
      }

      // 程序入口
      public class ThreadDemo () {
        public static void main(String[] args) {
          // 启动一个音乐线程并运行
          // 注意，启动线程只能调用start方法，不能调用run方法
          new MusicThread().start();
          new Thread(new GameThread()).start();
          // 匿名内部类实现方式(接口方式)
          new Thread(new Runnable() {
              @Override
              public void run() {
                  for (int i = 0; i < 50; i++) {
                      System.out.println("匿名内部类（接口）" + i + "正在进行哦");
                  }
              }
          }).start();

          // 匿名内部类实现方式(继承方式)
          new Thread() {
              @Override
              public void run() {
                  for (int i = 0; i < 50; i++) {
                      System.out.println("匿名内部类（继承）" + i + "正在进行哦");
                  }
              }
          }.start();
        }
      }
    </pre>
    <h3>三个线程一个执行50次，看看哪个线程执行的多</h3>
    <pre>
      public class EatAppleThread implements Runnable {
        private int count = 0;
        private int thread1Count = 0;
        private int thread2Count = 0;
        private int thread3Count = 0;

        @Override
        public void run() {
          for (int i = 0; i < 50; i++) {
            String threadName = Thread.currentThread().getName();
            if (count >= 49) {
              if (threadName.equals("thread1")) {
                System.out.println(threadName + "的次数为" + thread1Count);
              } else if (threadName.equals("thread2")) {
                System.out.println(threadName + "的次数为" + thread2Count);
              } else {
                System.out.println(threadName + "的次数为" + thread3Count);
              }
              break;
            }
            if (threadName.equals("thread1")) {
              thread1Count++;
            } else if (threadName.equals("thread2")) {
              thread2Count++;
            } else {
              thread3Count++;
            }
            count++;
          }
        }
      }

      // 程序入口
      public class ThreadDemo () {
        public static void main(String[] args) {
          EatAppleThread eat = new EatAppleThread();
          new Thread(eat, "thread1").start();
          new Thread(eat, "thread2").start();
          new Thread(eat, "thread3").start();
        }
      }
    </pre>
    <p>上面的方法会有问题，需要进行同步代码块/同步方法/同步锁来进行解决问题</p>
    <h3>同步代码块方式</h3>
    <pre>
      public class EatAppleThread implements Runnable {
        private int count = 0;
        private int thread1Count = 0;
        private int thread2Count = 0;
        private int thread3Count = 0;

        @Override
        public void run() {
          for (int i = 0; i < 500; i++) {
            String threadName = Thread.currentThread().getName();
            <span>synchronized</span> (this) {
              if (count >= 490) {
                if (threadName.equals("thread1")) {
                  System.out.println(threadName + "的次数为" + thread1Count);
                } else if (threadName.equals("thread2")) {
                  System.out.println(threadName + "的次数为" + thread2Count);
                } else {
                  System.out.println(threadName + "的次数为" + thread3Count);
                }
                break;
              }
              if (threadName.equals("thread1")) {
                thread1Count++;
              } else if (threadName.equals("thread2")) {
                thread2Count++;
              } else {
                thread3Count++;
              }
              count++;
            }
          }
        }
      }
    </pre>
    <h3>同步方法的方式</h3>
    <pre>
      public class EatAppleThread implements Runnable {
        private int count = 0;
        private int thread1Count = 0;
        private int thread2Count = 0;
        private int thread3Count = 0;

        @Override
        public void run() {
            for (int i = 0; i < 5000; i++) {
                if (printMethod()) {
                    break;
                }
            }
        }

        <span>synchronized</span> public boolean printMethod () {
            String threadName = Thread.currentThread().getName();
            if (count >= 4999) {
                if (threadName.equals("thread1")) {
                    System.out.println(threadName + "的次数为" + thread1Count);
                } else if (threadName.equals("thread2")) {
                    System.out.println(threadName + "的次数为" + thread2Count);
                } else {
                    System.out.println(threadName + "的次数为" + thread3Count);
                }
                return true;
            }
            if (threadName.equals("thread1")) {
                thread1Count++;
            } else if (threadName.equals("thread2")) {
                thread2Count++;
            } else {
                thread3Count++;
            }
            count++;
            return false;
        }
    }
    </pre>
  </div>
</template>

<style lang="scss" scoped>
.java{
  width: 6.6rem;
  margin: 0 auto;
  padding: 0.3rem;
  position: relative;
  background-color: #efebd0;
  border-radius: 8px;
  margin-top: 0.3rem;
  pre{
    margin: 20px;
    border-radius: 8px;
    padding: 10px;
    background-color: #b1d7e8;
    font-size: 14px;
    span{
      color: red;
      font-weight: 600;
    }
  }
}
</style>
