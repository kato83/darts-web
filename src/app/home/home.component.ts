import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

type GameMode = {
  id: 'zero-one' | 'cricket' | 'count-up';
  label: string;
  subtitle: string;
  description: string;
};

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CardModule, ButtonModule],
  templateUrl: './home.component.html',
  styles: '',
})
export class HomeComponent {
  protected readonly title = signal('DARTS WEB');
  protected readonly gameModes = signal<GameMode[]>([
    {
      id: 'zero-one',
      label: 'X01',
      subtitle: '501, 701など対応',
      description: 'ラウンド制の王道。スコアを積み重ねて先に0を目指します。'
    },
    {
      id: 'cricket',
      label: 'クリケット',
      subtitle: '20-15 + BULL',
      description: 'ナンバーの支配と点取りの駆け引き。戦略重視の対戦モード。'
    },
    {
      id: 'count-up',
      label: 'カウントアップ',
      subtitle: '8ラウンド固定',
      description: '合計点で実力を測定。練習にも大会にも使える定番ルール。'
    }
  ]);
  protected readonly modeCount = computed(() => this.gameModes().length);
}
