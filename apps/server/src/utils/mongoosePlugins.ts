import mongoose from 'mongoose';
import mongooseLeanVirtuals from 'mongoose-lean-virtuals';
import mongoosePaginate from 'mongoose-paginate-v2';

mongoose.plugin(mongooseLeanVirtuals);
mongoose.plugin(mongoosePaginate);

// Глобальные преобразования для JSON
mongoose.set('toJSON', {
  virtuals: true,
  transform: (doc, ret) => {
    delete ret._id;
    delete ret.__v;
    return ret;
  },
});

// Отключаем буферизацию команд в продакшене
if (process.env.NODE_ENV === 'production') {
  mongoose.set('bufferCommands', false);
}