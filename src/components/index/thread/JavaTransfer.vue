<template>
  <div>
    <h2>线程之间的通信</h2>
    <div class="box">
      <h3>方式1：wait/notify/notifyAll</h3>
      <h4>食物类</h4>
      <pre>
        public class Food {
          private String name = null;
          private String type = null;
          private Boolean noFood = true;

          synchronized public void setFood(String name, String type) {
              try {
                  if (!noFood) {
                      <span>this.wait()</span>;
                  }
                  this.name = name;
                  this.type = type;
                  noFood = false;
              } catch (InterruptedException e) {
                  e.printStackTrace();
              } finally {
                  <span>this.notify()</span>;
              }

          }

          synchronized public void getFood() {
              try {
                  if (noFood) {
                      <span>this.wait()</span>;
                  }
                  System.out.println(this.name + "--" + this.type);
                  noFood = true;
              } catch (InterruptedException e) {
                  e.printStackTrace();
              } finally {
                  <span>this.notify()</span>;
              }
          }
      }
      </pre>
      <h4>创建食物类</h4>
      <pre>
        public class CreatFood implements Runnable{
          private Food food = null;

          public CreatFood(Food food){
              this.food = food;
          }

          @Override
          public void run() {
              try {
                  for (int i = 0; i < 50; i++) {
                      Thread.sleep(100);
                      if (i % 2 == 0) {
                          food.setFood("小炒肉(1)", "1");
                      } else {
                          food.setFood("红烧肉(2)", "2");
                      }
                  }
              } catch (InterruptedException e) {
                  e.printStackTrace();
              }
          }
        }
      </pre>
      <h4>吃食物类</h4>
      <pre>
        public class EatFood implements Runnable {
          private Food food = null;
          public EatFood(Food food) {
              this.food = food;
          }

          @Override
          public void run() {
              try {
                  for (int i = 0; i < 50; i++) {
                      Thread.sleep(100);
                      food.getFood();
                  }
              } catch (InterruptedException e) {
                  e.printStackTrace();
              }
          }
        }
      </pre>
      <h4>测试类（程序入口）</h4>
      <pre>
        // 线程通信测试代码
        public class TransferDemo {
            public static void main(String[] args){
                Food food = new Food();
                new Thread(new CreatFood(food)).start();
                new Thread(new EatFood(food)).start();
            }
        }
      </pre>
    </div>
    <div class="box">
      <h3>方式2：await/signal/signalAll(java5之后开始，推荐)</h3>
      <h4>除食物类之外其余类代码同上</h4>
      <h4>食物类</h4>
      <pre>
        public class Food {
          private String name = null;
          private String type = null;
          private Boolean noFood = true;
          private Lock lock = new ReentrantLock();
          private Condition condition = lock.newCondition();

          public void setFood(String name, String type) {
              lock.lock();
              try {
                  if (!noFood) {
                      <span>condition.await()</span> // 方式1的wait;
                  }
                  this.name = name;
                  this.type = type;
                  noFood = false;
              } catch (InterruptedException e) {
                  e.printStackTrace();
              } finally {
                  condition.signal();
                  lock.unlock();
              }
          }

          public void getFood() {
              lock.lock();
              try {
                  if (noFood) {
                      condition.await();
                  }
                  System.out.println(this.name + "--" + this.type);
                  noFood = true;
              } catch (InterruptedException e) {
                  e.printStackTrace();
              } finally {
                  <span>condition.signal()</span> // 方式1的notify;
                  lock.unlock();
              }
          }
        }
      </pre>
      <p>注意：方式2中lock.lock()必须在condition操作前，lock.unlock()必须在condition之后</p>
    </div>
  </div>
</template>
